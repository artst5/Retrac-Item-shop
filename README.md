# Retrac Item Shop

**Retrac Item Shop** is a web-based item shop interface powered by Fortnite's official APIs and routed through **Snow's backend infrastructure**. It provides real-time item listings, including cosmetics, prices, and featured images from the Fortnite game.

---

## Preview

<img width="1919" height="1079" alt="Screenshot of Item Shop UI" src="https://github.com/user-attachments/assets/f49485d5-165e-4094-8a95-55f13f152d17" />

---

## Sample Storefront Code

Below is an example of a storefront item display block using HTML and dynamic content from the Fortnite API.

```html
<div class="storefrontOffer Uncommon Small" style="cursor: auto;">
    <div 
        style="background-image: url('https://fortnite-api.com/images/cosmetics/br/LSID_160_KTVendetta/icon.png');"
        class="storefrontOfferImage featuredImage">
    </div>
    
    <img src="PUT YOUR FORTNITE API SKIN IMAGE URL HERE" style="display: none;">
    
    <div class="storefrontOfferInformation">
        <div class="storefrontOfferPrice">
            <span>0</span>
            <p>Loading Screen</p>
            <img
                src="https://gamepedia.cursecdn.com/fortnite_gamepedia/f/f3/V-bucks_icon.png"
                alt="V-Bucks Icon"
                class="currencyIcon">
        </div>
        <div class="storefrontOfferTitle">
            <span>Vengeance</span>
        </div>
    </div>
</div>
```

---

## Features

* ✅ Real-time integration with [Fortnite API](https://fortnite-api.com/)
* ✅ Dynamic rendering of cosmetic items and prices
* ✅ Backend routing through Snow infrastructure
* ✅ Fully customizable storefront blocks

---

## Setup & Integration

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/retrac-item-shop.git
   ```
2. Replace placeholder image URLs with actual Fortnite API image paths.
3. Connect your backend to route through Snow (see `/docs/backend.md` for details).
4. Deploy the frontend via your preferred hosting provider.

