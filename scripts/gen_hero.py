"""Generate a wide 16:9 hero landscape version of the Rivelle property front
using Gemini Nano Banana with the actual property photo as reference."""
import asyncio
import base64
import os
import sys
from pathlib import Path

# Load .env
from dotenv import load_dotenv
load_dotenv("/app/backend/.env")

from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

REF_IMAGE = "/app/frontend/public/photos/property_front.png"
OUT_DIR = Path("/app/frontend/public/photos")


async def generate_hero():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        print("Missing EMERGENT_LLM_KEY")
        sys.exit(1)

    # Read reference
    with open(REF_IMAGE, "rb") as f:
        ref_bytes = f.read()
    ref_b64 = base64.b64encode(ref_bytes).decode("utf-8")

    chat = LlmChat(
        api_key=api_key,
        session_id="rivelle-hero-gen",
        system_message="You are an expert architectural photography retoucher.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )

    prompt = (
        "Recreate this exact boutique hotel building in a wide 16:9 cinematic landscape orientation "
        "suitable for a website hero banner. Keep every detail identical: the terracotta/rust-red "
        "colored walls with horizontal wooden cladding, the two circular black 'RIVELLE BOUTIQUE STAYS' "
        "signage plaques on the wall, the black 'KITCHEN ALL DAY DINING' circular sign, the deep forest "
        "green wooden shutters and doors, the balcony with plants, the two brass wall lanterns flanking "
        "the entrance, the number '5' plaque on the gate, the metal gate on the right, the paved "
        "sidewalk in front, and the warm interior lighting glowing through the windows. Show the "
        "building centered but include some of the street context, adjacent walls and sky on both "
        "sides to fill a wide cinematic landscape frame. Shoot at the same magic-hour dusk lighting "
        "with warm amber lamp glow and deep blue sky above. Photorealistic, sharp, hero-quality, "
        "no watermarks, no text overlays."
    )

    msg = UserMessage(text=prompt, file_contents=[ImageContent(ref_b64)])

    print("Generating hero image via Nano Banana...")
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"Text response: {text[:120] if text else '(no text)'}")

    if not images:
        print("No images returned!")
        sys.exit(2)

    for i, img in enumerate(images):
        out_path = OUT_DIR / f"property_hero_wide.png"
        image_bytes = base64.b64decode(img["data"])
        with open(out_path, "wb") as f:
            f.write(image_bytes)
        print(f"Saved: {out_path} ({len(image_bytes)} bytes)")
        break  # only need first


if __name__ == "__main__":
    asyncio.run(generate_hero())
