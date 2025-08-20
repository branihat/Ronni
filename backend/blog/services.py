import os
from typing import List


def _fallback_content(product_name: str, description: str, features: List[str], pros: str, cons: str, affiliate_url: str) -> str:
    body = [
        f"## {product_name} Review",
        description or "",
        "",
        "### Key Features",
        *(f"- {f}" for f in features if f),
        "",
        "### Pros",
        *([f"- {p}" for p in pros.splitlines()] if pros else []),
        "",
        "### Cons",
        *([f"- {c}" for c in cons.splitlines()] if cons else []),
        "",
        f"[Buy Now]({affiliate_url})",
    ]
    return "\n".join(filter(None, body))


def generate_post_with_gemini_prompt(product_name: str, description: str, features: List[str], pros: str, cons: str, affiliate_url: str) -> str:
    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        return _fallback_content(product_name, description, features, pros, cons, affiliate_url)

    try:
        import google.generativeai as genai
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel("gemini-1.5-flash")
        prompt = (
            "You are an expert product reviewer. Write an SEO-optimized, helpful review article with the sections: "
            "Introduction, Key Features (bulleted), Pros, Cons, Who It's For, and Conclusion with a clear CTA link. "
            f"Product name: {product_name}. Description: {description}. "
            f"Features: {', '.join([f for f in features if f])}. Pros: {pros}. Cons: {cons}. "
            f"Use friendly, honest tone. Include a final markdown link to Buy Now using this URL: {affiliate_url}."
        )
        resp = model.generate_content(prompt)
        text = getattr(resp, "text", None)
        if not text:
            return _fallback_content(product_name, description, features, pros, cons, affiliate_url)
        return text
    except Exception:
        return _fallback_content(product_name, description, features, pros, cons, affiliate_url)



