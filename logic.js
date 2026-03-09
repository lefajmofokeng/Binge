/* ── DATA ─────────────────────────────────────────────── */
const CATS=[
  {id:'ribs',    label:'Ribs'},
  {id:'burgers', label:'Burgers'},
  {id:'wraps',   label:'Wraps'},
  {id:'chicken', label:'Fried Chicken'},
  {id:'sides',   label:'Sides'},
  {id:'drinks',  label:'Drinks'},
];
const ITEMS=[
  {id:1,cat:'ribs',name:'Baby Back Ribs — Full Rack',price:220,
   img:'images/baby ribs.png',
   desc:'Slow-cooked fall-off-the-bone pork ribs glazed in our signature BBQ sauce. Paired with your choice of sides.',
   opts:[
     {type:'select',label:'Sauce',choices:['Signature BBQ','Honey Mustard','Peri-Peri','Garlic Butter']},
     {type:'select',label:'Side',choices:['Coleslaw','Loaded Fries','Corn on the Cob','Garden Salad']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot','Xtra Hot']},
   ]},
  {id:2,cat:'ribs',name:'Baby Back Ribs — Half Rack',price:130,
   img:'images/baby ribs - half.jpg',
   desc:'Half rack of our legendary slow-cooked pork ribs. Perfect for one.',
   opts:[
     {type:'select',label:'Sauce',choices:['Signature BBQ','Honey Mustard','Peri-Peri']},
     {type:'select',label:'Side',choices:['Coleslaw','Loaded Fries','Corn on the Cob']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot','Xtra Hot']},
   ]},
  {id:3,cat:'ribs',name:'Smoked Beef Short Ribs',price:260,
   img:'images/smoked beef.jpg',
   desc:'Thick-cut beef short ribs smoked low and slow over wood chips.',
   opts:[
     {type:'select',label:'Sauce',choices:['Smoky Chipotle','Classic BBQ','Peri-Peri']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot']},
   ]},
  {id:4,cat:'burgers',name:'Classic Beef Smash Burger',price:95,
   img:'images/beef smash.jpg',
   desc:'Two smashed beef patties, American cheese, pickles, caramelised onions, K-sauce on a toasted brioche bun.',
   opts:[
     {type:'select',label:'Patties',choices:['Single','Double','Triple']},
     {type:'select',label:'Cheese',choices:['American','Cheddar','Pepper Jack','None']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot']},
     {type:'add',label:'Extras',choices:['Bacon +R15','Avocado +R15','Extra Sauce']},
   ]},
  {id:5,cat:'burgers',name:'BBQ Bacon Burger',price:115,
   img:'images/bbq.png',
   desc:'Beef patty, crispy bacon, BBQ sauce, pickled jalapeños, cheddar, fresh lettuce and ripe tomato.',
   opts:[
     {type:'select',label:'Patties',choices:['Single','Double']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot']},
   ]},
  {id:6,cat:'burgers',name:'Mushroom & Swiss Burger',price:110,
   img:'images/mushroom.jpg',
   desc:'Beef patty, sautéed garlic mushrooms, melted Swiss cheese, truffle mayo, fresh greens.',
   opts:[
     {type:'select',label:'Patties',choices:['Single','Double']},
     {type:'add',label:'Extras',choices:['Extra Mushrooms','Extra Cheese']},
   ]},
  {id:7,cat:'burgers',name:'The K Special Burger',price:145,
   img:'images/pork.png',
   desc:'Double patty, crispy bacon, fried egg, cheese, caramelised onions, secret K-sauce.',
   opts:[
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot','Xtra Hot']},
     {type:'add',label:'Extras',choices:['Extra Bacon +R15','Avocado +R15']},
   ]},
  {id:8,cat:'wraps',name:'Grilled Steak Wrap',price:105,
   img:'images/beef wrap.png',
   desc:'Tender ribeye steak strips, peri-peri drizzle, mixed greens, garlic cream sauce in a toasted flour tortilla.',
   opts:[
     {type:'select',label:'Sauce',choices:['Peri-Peri','Garlic Butter','BBQ','Chilli']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot','Xtra Hot']},
     {type:'add',label:'Extras',choices:['Extra Steak +R20','Add Cheese','Jalapeños']},
   ]},
  {id:9,cat:'wraps',name:'Crispy Chicken Wrap',price:90,
   img:'images/chicken wrap.png',
   desc:'Golden crispy chicken strips, creamy coleslaw, pickles, sweet sriracha honey drizzle.',
   opts:[
     {type:'select',label:'Sauce',choices:['Sriracha Honey','BBQ','Peri-Peri','Plain']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot']},
   ]},
  {id:10,cat:'wraps',name:'BBQ Sausage Wrap',price:80,
   img:'images/liver.png',
   desc:'Chargrilled beef sausage, caramelised onions, tangy BBQ sauce, crunchy pickles in a warm tortilla.',
   opts:[
     {type:'select',label:'Sauce',choices:['BBQ','Mustard','Peri-Peri']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot']},
   ]},
  {id:11,cat:'chicken',name:'Crispy Fried Chicken — 3pcs',price:85,
   img:'images/3pcs.png',
   desc:'Three pieces of our golden, juicy, perfectly crispy-coated fried chicken.',
   opts:[
     {type:'select',label:'Flavour',choices:['Original','Peri-Peri','Honey BBQ','Lemon Herb']},
     {type:'select',label:'Side',choices:['Fries','Coleslaw','Corn']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot','Xtra Hot']},
   ]},
  {id:12,cat:'chicken',name:'Fried Chicken — 6pcs Bucket',price:155,
   img:'images/6pcs.png',
   desc:'Six pieces of our legendary fried chicken. Great for sharing.',
   opts:[
     {type:'select',label:'Flavour',choices:['Original','Peri-Peri','Honey BBQ','Lemon Herb']},
     {type:'select',label:'Spice Level',choices:['Mild','Medium','Hot','Xtra Hot']},
   ]},
  {id:13,cat:'chicken',name:'Grilled Chicken Strips',price:90,
   img:'images/strips.png',
   desc:'Marinated chicken breast strips grilled to juicy perfection. Served with dipping sauce.',
   opts:[
     {type:'select',label:'Marinade',choices:['Peri-Peri','Garlic Herb','Honey Mustard','Plain']},
     {type:'select',label:'Dip',choices:['BBQ','Garlic Mayo','Sweet Chilli']},
   ]},
  {id:14,cat:'sides',name:'Loaded Cheese Fries',price:60,
   img:'images/fries.png',
   desc:'Crispy golden fries smothered in house-made cheese sauce, jalapeños, and crispy bacon bits.',
   opts:[
     {type:'add',label:'Extras',choices:['Extra Bacon +R10','Sour Cream','Guacamole +R15']},
   ]},
  {id:15,cat:'sides',name:'Classic Fries',price:35,
   img:'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=900&q=80',
   desc:'Perfectly golden, lightly salted hand-cut fries.',
   opts:[
     {type:'select',label:'Size',choices:['Regular','Large','XL']},
     {type:'select',label:'Seasoning',choices:['Classic Salt','Paprika','Peri-Peri Salt']},
   ]},
  {id:16,cat:'sides',name:'Grilled Sausages — 2pcs',price:75,
   img:'images/sausages.png',
   desc:'Thick, juicy pure beef sausages charred on the grill.',
   opts:[
     {type:'select',label:'Sauce',choices:['Mustard','BBQ','Peri-Peri','Tomato']},
     {type:'add',label:'Extras',choices:['Caramelised Onions','Cheese Sauce']},
   ]},
  {id:17,cat:'sides',name:'Onion Rings',price:40,
   img:'https://images.unsplash.com/photo-1639024471283-03518883512d?w=900&q=80',
   desc:'Beer-battered golden onion rings. Crispy on the outside, sweet within.',
   opts:[
     {type:'select',label:'Dip',choices:['Ranch','BBQ','Sweet Chilli','Garlic Mayo']},
   ]},
  {id:18,cat:'drinks',name:'Craft Lemonade',price:30,
   img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=900&q=80',
   desc:'Hand-squeezed fresh lemonade with garden mint and a touch of honey.',
   opts:[
     {type:'select',label:'Size',choices:['Regular','Large']},
     {type:'select',label:'Flavour',choices:['Classic','Strawberry','Mango','Mint']},
   ]},
  {id:19,cat:'drinks',name:'Thick Milkshake',price:55,
   img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&q=80',
   desc:'Thick, creamy hand-blended milkshakes made with premium ice cream.',
   opts:[
     {type:'select',label:'Flavour',choices:['Chocolate','Vanilla','Strawberry','Salted Caramel','Peanut Butter']},
     {type:'select',label:'Size',choices:['Regular','Large']},
   ]},
  {id:20,cat:'drinks',name:'Soft Drinks',price:20,
   img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80',
   desc:'Ice-cold canned soft drinks.',
   opts:[
     {type:'select',label:'Choice',choices:['Coca-Cola','Sprite','Fanta Orange','Fanta Grape','Cream Soda','Still Water']},
   ]},
  {id:21,cat:'drinks',name:'Fresh Fruit Juice',price:35,
   img:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=900&q=80',
   desc:'100% natural fresh-pressed fruit juice. No added sugar, no preservatives.',
   opts:[
     {type:'select',label:'Flavour',choices:['Orange','Apple','Watermelon','Mixed Tropical']},
     {type:'select',label:'Size',choices:['Small','Large']},
   ]},
];


/* ── PRODUCT INFO DATA ─────────────────────────────────── */
const ITEM_INFO = {
  1: { // Baby Back Ribs Full Rack
    ingredients: 'Pork baby back ribs, brown sugar, paprika, garlic powder, onion powder, black pepper, salt, apple cider vinegar, Worcestershire sauce, tomato paste, honey.',
    allergens: ['Gluten (Worcestershire sauce)', 'Soy', 'Sulphites'],
    nutrition: [{label:'Calories',val:'820 kcal'},{label:'Protein',val:'68g'},{label:'Total Fat',val:'42g'},{label:'Saturated Fat',val:'15g'},{label:'Carbohydrates',val:'38g'},{label:'Sugar',val:'22g'},{label:'Sodium',val:'980mg'}],
    bestWith: ['A cold craft lemonade', 'Loaded Cheese Fries on the side', 'After a long day — ultimate comfort', 'Sharing with family on weekends', 'Paired with Coleslaw to balance richness'],
  },
  2: { // Baby Back Ribs Half Rack
    ingredients: 'Pork baby back ribs, brown sugar, paprika, garlic powder, onion powder, black pepper, salt, apple cider vinegar, Worcestershire sauce, tomato paste, honey.',
    allergens: ['Gluten', 'Soy', 'Sulphites'],
    nutrition: [{label:'Calories',val:'480 kcal'},{label:'Protein',val:'38g'},{label:'Total Fat',val:'24g'},{label:'Saturated Fat',val:'8g'},{label:'Carbohydrates',val:'20g'},{label:'Sugar',val:'12g'},{label:'Sodium',val:'560mg'}],
    bestWith: ['Classic Fries', 'A cold Soft Drink', 'Quick lunch or solo dinner'],
  },
  3: { // Beef Short Ribs
    ingredients: 'Beef short ribs, smoked paprika, garlic, onion, black pepper, sea salt, brown sugar, apple wood chips for smoking, tomato base sauce.',
    allergens: ['Soy (sauce)'],
    nutrition: [{label:'Calories',val:'940 kcal'},{label:'Protein',val:'72g'},{label:'Total Fat',val:'58g'},{label:'Saturated Fat',val:'22g'},{label:'Carbohydrates',val:'18g'},{label:'Sugar',val:'10g'},{label:'Sodium',val:'1100mg'}],
    bestWith: ['Craft Lemonade to cut through the richness', 'Corn on the Cob', 'Special occasions and celebrations'],
  },
  4: { // Classic Beef Smash Burger
    ingredients: 'Beef patty (80/20 blend), brioche bun, American cheese, gherkins, caramelised onions, lettuce, tomato, K-sauce (mayo, ketchup, mustard, relish).',
    allergens: ['Gluten (bun)', 'Dairy (cheese)', 'Eggs (mayo)', 'Mustard'],
    nutrition: [{label:'Calories',val:'680 kcal'},{label:'Protein',val:'42g'},{label:'Total Fat',val:'36g'},{label:'Saturated Fat',val:'14g'},{label:'Carbohydrates',val:'52g'},{label:'Sugar',val:'8g'},{label:'Sodium',val:'820mg'}],
    bestWith: ['Classic Fries or Loaded Fries', 'A Thick Milkshake', 'Game day or weekend treat', 'Paired with Onion Rings'],
  },
  5: { // BBQ Bacon Burger
    ingredients: 'Beef patty, brioche bun, streaky bacon, cheddar cheese, BBQ sauce, pickled jalapeños, fresh lettuce, ripe tomato.',
    allergens: ['Gluten (bun)', 'Dairy', 'Eggs', 'Mustard (BBQ sauce)'],
    nutrition: [{label:'Calories',val:'760 kcal'},{label:'Protein',val:'48g'},{label:'Total Fat',val:'42g'},{label:'Saturated Fat',val:'16g'},{label:'Carbohydrates',val:'56g'},{label:'Sugar',val:'12g'},{label:'Sodium',val:'960mg'}],
    bestWith: ['Classic Fries', 'Craft Lemonade', 'When you want something bold and smoky'],
  },
  6: { // Mushroom Swiss Burger
    ingredients: 'Beef patty, brioche bun, sautéed garlic mushrooms, Swiss cheese, truffle mayo, mixed greens, tomato.',
    allergens: ['Gluten (bun)', 'Dairy (cheese)', 'Eggs (mayo)'],
    nutrition: [{label:'Calories',val:'640 kcal'},{label:'Protein',val:'38g'},{label:'Total Fat',val:'34g'},{label:'Saturated Fat',val:'13g'},{label:'Carbohydrates',val:'48g'},{label:'Sugar',val:'5g'},{label:'Sodium',val:'700mg'}],
    bestWith: ['A light side salad', 'Fresh Fruit Juice', 'Date night or a more refined burger craving'],
  },
  7: { // K Special Burger
    ingredients: 'Double beef patty (80/20), brioche bun, streaky bacon, fried egg, cheddar cheese, caramelised onions, special K-sauce.',
    allergens: ['Gluten (bun)', 'Dairy', 'Eggs', 'Mustard'],
    nutrition: [{label:'Calories',val:'920 kcal'},{label:'Protein',val:'62g'},{label:'Total Fat',val:'54g'},{label:'Saturated Fat',val:'20g'},{label:'Carbohydrates',val:'58g'},{label:'Sugar',val:'10g'},{label:'Sodium',val:'1080mg'}],
    bestWith: ['Loaded Cheese Fries', 'A Thick Milkshake', 'When you are seriously hungry', 'The ultimate Food By K experience'],
  },
  8: { // Grilled Steak Wrap
    ingredients: 'Ribeye steak strips, flour tortilla, peri-peri sauce, mixed greens, garlic cream sauce, fresh herbs.',
    allergens: ['Gluten (tortilla)', 'Dairy (cream sauce)', 'Eggs'],
    nutrition: [{label:'Calories',val:'580 kcal'},{label:'Protein',val:'44g'},{label:'Total Fat',val:'26g'},{label:'Saturated Fat',val:'10g'},{label:'Carbohydrates',val:'46g'},{label:'Sugar',val:'4g'},{label:'Sodium',val:'740mg'}],
    bestWith: ['Classic Fries', 'Craft Lemonade', 'Lunch on the go', 'After gym — high protein meal'],
  },
  9: { // Crispy Chicken Wrap
    ingredients: 'Chicken breast, flour tortilla, seasoned breadcrumbs, coleslaw (cabbage, carrot, mayo), pickles, sriracha honey drizzle.',
    allergens: ['Gluten (tortilla + crumbs)', 'Eggs (mayo)', 'Mustard'],
    nutrition: [{label:'Calories',val:'520 kcal'},{label:'Protein',val:'36g'},{label:'Total Fat',val:'22g'},{label:'Saturated Fat',val:'6g'},{label:'Carbohydrates',val:'50g'},{label:'Sugar',val:'8g'},{label:'Sodium',val:'680mg'}],
    bestWith: ['Classic Fries', 'Still Water or Fresh Juice', 'Quick satisfying lunch', 'Kids and adults alike'],
  },
  10: { // BBQ Sausage Wrap
    ingredients: 'Pure beef sausage, flour tortilla, caramelised onions, BBQ sauce, dill pickles.',
    allergens: ['Gluten (tortilla + sausage casing)', 'Mustard (BBQ sauce)', 'Sulphites'],
    nutrition: [{label:'Calories',val:'480 kcal'},{label:'Protein',val:'28g'},{label:'Total Fat',val:'24g'},{label:'Saturated Fat',val:'9g'},{label:'Carbohydrates',val:'44g'},{label:'Sugar',val:'10g'},{label:'Sodium',val:'720mg'}],
    bestWith: ['Classic Fries', 'Soft Drink', 'A no-fuss, filling meal any time'],
  },
  11: { // Crispy Chicken 3pcs
    ingredients: 'Chicken pieces (drumstick, thigh, wing), seasoned flour coating (flour, paprika, garlic, black pepper, salt), buttermilk marinade, vegetable oil for frying.',
    allergens: ['Gluten (flour)', 'Dairy (buttermilk)'],
    nutrition: [{label:'Calories',val:'620 kcal'},{label:'Protein',val:'46g'},{label:'Total Fat',val:'32g'},{label:'Saturated Fat',val:'8g'},{label:'Carbohydrates',val:'38g'},{label:'Sugar',val:'1g'},{label:'Sodium',val:'780mg'}],
    bestWith: ['Coleslaw to balance the crunch', 'Craft Lemonade', 'Family dinner or share box', 'Game day snacking'],
  },
  12: { // 6pcs Bucket
    ingredients: 'Chicken pieces, seasoned flour coating (flour, paprika, garlic, black pepper, salt), buttermilk marinade, vegetable oil for frying.',
    allergens: ['Gluten (flour)', 'Dairy (buttermilk)'],
    nutrition: [{label:'Calories',val:'1240 kcal (full bucket)'},{label:'Protein',val:'92g'},{label:'Total Fat',val:'64g'},{label:'Saturated Fat',val:'16g'},{label:'Carbohydrates',val:'76g'},{label:'Sugar',val:'2g'},{label:'Sodium',val:'1560mg'}],
    bestWith: ['Sharing with 2–3 people', 'Loaded Fries on the side', 'A Thick Milkshake or Soft Drink', 'Family gatherings or a big appetite'],
  },
  13: { // Grilled Chicken Strips
    ingredients: 'Chicken breast, peri-peri marinade (chilli, garlic, lemon, olive oil, herbs), served with dipping sauce of choice.',
    allergens: ['None (plain) — check chosen dip'],
    nutrition: [{label:'Calories',val:'320 kcal'},{label:'Protein',val:'52g'},{label:'Total Fat',val:'10g'},{label:'Saturated Fat',val:'2g'},{label:'Carbohydrates',val:'6g'},{label:'Sugar',val:'2g'},{label:'Sodium',val:'480mg'}],
    bestWith: ['Garden Salad for a light meal', 'Post-workout high-protein option', 'Fresh Fruit Juice', 'As a starter before ribs or a burger'],
  },
  14: { // Loaded Cheese Fries
    ingredients: 'Hand-cut potatoes, vegetable oil, house-made cheese sauce (cheddar, cream, butter, flour), pickled jalapeños, crispy bacon bits, seasoning.',
    allergens: ['Gluten (flour in sauce)', 'Dairy (cheese sauce)', 'Pork (bacon)'],
    nutrition: [{label:'Calories',val:'640 kcal'},{label:'Protein',val:'18g'},{label:'Total Fat',val:'36g'},{label:'Saturated Fat',val:'14g'},{label:'Carbohydrates',val:'68g'},{label:'Sugar',val:'4g'},{label:'Sodium',val:'920mg'}],
    bestWith: ['Any burger', 'Fried Chicken', 'While watching sport', 'Sharing between two'],
  },
  15: { // Classic Fries
    ingredients: 'Hand-cut potatoes, vegetable oil, sea salt (or chosen seasoning).',
    allergens: ['None (plain) — may contain traces of gluten'],
    nutrition: [{label:'Calories',val:'320 kcal'},{label:'Protein',val:'4g'},{label:'Total Fat',val:'14g'},{label:'Saturated Fat',val:'2g'},{label:'Carbohydrates',val:'46g'},{label:'Sugar',val:'1g'},{label:'Sodium',val:'380mg'}],
    bestWith: ['Every burger and wrap', 'Dipping in K-sauce or garlic mayo', 'Any time of day'],
  },
  16: { // Grilled Sausages
    ingredients: 'Pure beef sausages (beef, pork fat, salt, black pepper, coriander, nutmeg, natural casing), char-grilled.',
    allergens: ['Gluten (casing binder)', 'Sulphites'],
    nutrition: [{label:'Calories',val:'480 kcal'},{label:'Protein',val:'32g'},{label:'Total Fat',val:'36g'},{label:'Saturated Fat',val:'14g'},{label:'Carbohydrates',val:'6g'},{label:'Sugar',val:'1g'},{label:'Sodium',val:'820mg'}],
    bestWith: ['Classic Fries and mustard', 'Onion Rings', 'A cold Soft Drink', 'Braai-style dinner at home'],
  },
  17: { // Onion Rings
    ingredients: 'White onion, beer batter (flour, beer, salt, paprika), vegetable oil for frying.',
    allergens: ['Gluten (flour + beer)', 'May contain traces of dairy'],
    nutrition: [{label:'Calories',val:'360 kcal'},{label:'Protein',val:'6g'},{label:'Total Fat',val:'18g'},{label:'Saturated Fat',val:'3g'},{label:'Carbohydrates',val:'46g'},{label:'Sugar',val:'6g'},{label:'Sodium',val:'480mg'}],
    bestWith: ['Burgers as a side swap', 'Ranch or garlic mayo dip', 'Sharing as a starter', 'Cold drinks on a hot day'],
  },
  18: { // Craft Lemonade
    ingredients: 'Fresh-squeezed lemons, filtered water, honey, fresh mint, ice.',
    allergens: ['None'],
    nutrition: [{label:'Calories',val:'120 kcal'},{label:'Total Sugar',val:'28g'},{label:'Vitamin C',val:'High'},{label:'Sodium',val:'10mg'}],
    bestWith: ['Ribs — cuts through the richness', 'Any meal on a hot day', 'Kids and adults', 'Spicy dishes to cool down'],
  },
  19: { // Thick Milkshake
    ingredients: 'Premium ice cream (dairy, eggs, sugar), full-cream milk, flavour-specific additions (cocoa, strawberry, vanilla, caramel, peanut butter).',
    allergens: ['Dairy (milk + ice cream)', 'Eggs', 'Peanuts (peanut butter flavour)', 'Gluten (traces)'],
    nutrition: [{label:'Calories',val:'580 kcal'},{label:'Protein',val:'12g'},{label:'Total Fat',val:'22g'},{label:'Saturated Fat',val:'14g'},{label:'Sugar',val:'68g'},{label:'Sodium',val:'220mg'}],
    bestWith: ['Burgers — the classic combo', 'After a meal as dessert', 'Kids love it', 'Weekend treat'],
  },
  20: { // Soft Drinks
    ingredients: 'Carbonated water, sugar/sweetener, natural and artificial flavours, colour, preservatives. (Varies by brand — Coca-Cola, Sprite, Fanta, Cream Soda)',
    allergens: ['None (check specific product)'],
    nutrition: [{label:'Calories',val:'~140 kcal (330ml can)'},{label:'Sugar',val:'~35g'},{label:'Sodium',val:'~40mg'}],
    bestWith: ['Every meal', 'Fried Chicken', 'Burgers and fries', 'Anytime you need refreshment'],
  },
  21: { // Fresh Fruit Juice
    ingredients: 'Freshly pressed seasonal fruit — orange, apple, watermelon or tropical blend. No added sugar, no preservatives.',
    allergens: ['None'],
    nutrition: [{label:'Calories',val:'~140 kcal (350ml)'},{label:'Total Sugar',val:'~30g (natural)'},{label:'Vitamin C',val:'High'},{label:'Fibre',val:'~1g'},{label:'Sodium',val:'~5mg'}],
    bestWith: ['Grilled Chicken for a healthy meal', 'Breakfast or early lunch', 'Post-workout with Chicken Strips', 'Anytime you want something natural'],
  },
};

/* ── STATE ─────────────────────────────────────────────── */
let cart=[], curItem=null, curQty=1, curSel={}, curAdd=new Set();
let ckStep=1, delivMethod='delivery', payMethod='cash';

/* ── HELPERS ───────────────────────────────────────────── */
function h(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function escRe(t){return t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function highlight(text,q){if(!q)return h(text);return h(text).replace(new RegExp('('+escRe(q)+')','gi'),'<mark class="hl">$1</mark>')}

/* ── INIT ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{
  buildSidebar(); buildMenu(); initScrollSpy(); initNavScroll(); initSearch(); initBackTop();
  updateCartUI(); setDeliv('delivery'); initExclCarousel();
});

/* ── SIDEBAR ───────────────────────────────────────────── */
function buildSidebar(){
  document.getElementById('sbNav').innerHTML=CATS.map(c=>
    `<li><a class="sb-item" data-cat="${c.id}" href="#cat-${c.id}" onclick="sbClick(event,'${c.id}')">${c.label}</a></li>`
  ).join('');
}
function sbClick(e,id){e.preventDefault();document.getElementById('cat-'+id)?.scrollIntoView({behavior:'smooth',block:'start'});}

/* ── MENU BUILD ────────────────────────────────────────── */
function buildMenu(){
  document.getElementById('menuContent').innerHTML=CATS.map(c=>{
    const items=ITEMS.filter(i=>i.cat===c.id);
    return`<section class="menu-section" id="cat-${c.id}">
      <div class="sec-head">
        <div class="sec-title">${c.label}</div>
      </div>
      <div class="prod-grid">${items.map(cardHTML).join('')}</div>
    </section>`;
  }).join('');
}
function cardHTML(item){
  return`<div class="prod-card" onclick="openPDP(${item.id})" role="button" tabindex="0" aria-label="${h(item.name)}, R${item.price}">
    <div class="prod-img-wrap"><img class="prod-img" src="${item.img}" alt="${h(item.name)}" loading="lazy"></div>
    <div class="prod-info">
      <div class="prod-name">${h(item.name)}</div>
      <div class="prod-price">R${item.price}</div>
    </div>
  </div>`;
}

/* ── PRODUCT DETAIL PAGE ───────────────────────────────── */
function openPDP(id){
  const item=ITEMS.find(i=>i.id===id); if(!item) return;
  curItem=item; curQty=1; curSel={}; curAdd=new Set();

  const cat=CATS.find(c=>c.id===item.cat);

  /* Hero */
  document.getElementById('pdpImg').src=item.img;
  document.getElementById('pdpImg').alt=item.name;
  document.getElementById('pdpName').textContent=item.name;
  document.getElementById('pdpMeta').textContent=item.desc;
  document.getElementById('pdpPriceTag').textContent=`R${item.price}`;

  /* Footer bar */
  document.getElementById('pdpFootName').textContent=item.name;
  document.getElementById('pdpFootPrice').textContent=`R${item.price}`;

  /* Note field */
  document.getElementById('pdpNote').value='';

  /* Qty reset */
  curQty=1;
  document.getElementById('qtyN').textContent=1;
  updSub();

  /* Build left column: all option groups */
  const colLeft=document.getElementById('pdpColLeft');
  colLeft.innerHTML='';

  if(item.opts && item.opts.length){
    const selOpts=item.opts.filter(o=>o.type==='select');
    const addOpts=item.opts.filter(o=>o.type==='add');

    if(selOpts.length){
      const titleEl=document.createElement('div');
      titleEl.className='opt-section-title';titleEl.textContent='Customise Your Order';
      colLeft.appendChild(titleEl);

      selOpts.forEach(opt=>{
        curSel[opt.label]=opt.choices[0];
        const grpEl=document.createElement('div');
        grpEl.className='opt-group';
        grpEl.innerHTML=`<div class="opt-group-label">${h(opt.label)}</div>
          ${opt.choices.map((ch,i)=>`
            <div class="opt-row${i===0?' sel':''}" onclick="selOpt(this,'${escJs(opt.label)}','${escJs(ch)}')">
              <span class="opt-row-label">${h(ch)}</span>
              <div class="opt-checkbox">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>`).join('')}`;
        colLeft.appendChild(grpEl);
      });
    }

    if(addOpts.length){
      const titleEl=document.createElement('div');
      titleEl.className='opt-section-title';titleEl.textContent='Extras & Add-ons';
      colLeft.appendChild(titleEl);

      addOpts.forEach(opt=>{
        const grpEl=document.createElement('div');
        grpEl.className='opt-group';
        grpEl.innerHTML=`<div class="opt-group-label">${h(opt.label)}</div>
          ${opt.choices.map(ch=>`
            <div class="opt-row" onclick="toggleAdd(this,'${escJs(ch)}')">
              <span class="opt-row-label">${h(ch)}</span>
              <div class="opt-plus">
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
            </div>`).join('')}`;
        colLeft.appendChild(grpEl);
      });
    }
  } else {
    colLeft.innerHTML=`<div style="color:var(--gray-500);font-size:.9rem;padding-top:.5rem">No customisation options for this item.</div>`;
  }

  /* Populate accordion info section */
  const info = ITEM_INFO[id];
  document.getElementById('pdpInfoName').textContent = item.name;
  if(info){
    // Ingredients
    const allergenText = info.allergens.join(', ');
    const allergenLine = `<p style="margin-top:.8rem"><strong>Allergens:</strong> ${h(allergenText)}</p>`;
    document.getElementById('accIngrContent').innerHTML=
      `<p style="margin-bottom:.8rem">${h(info.ingredients)}</p>
       ${allergenLine}`;
    // Nutrition
    const rows = info.nutrition.map((r,i)=>
      `<tr${i===0?' class="nutr-total"':''}><td>${h(r.label)}</td><td>${h(r.val)}</td></tr>`
    ).join('');
    document.getElementById('accNutrContent').innerHTML=
      `<table class="nutr-table">${rows}</table>
       <p class="nutr-disclaimer">Nutrition information is calculated based on our standard recipes. Because our products may be customised, exact information may vary.</p>`;
    // Best with
    const bwItems = info.bestWith.map(b=>`<div class="best-chip">${h(b)}</div>`).join('');
    document.getElementById('accBestContent').innerHTML=
      `<div class="best-with-grid">${bwItems}</div>`;
  }

  /* Scroll body to top */
  document.getElementById('pdpScroll').scrollTop=0;

  /* Open — lock body scroll without layout shift */
  const sb=window.innerWidth-document.documentElement.clientWidth;
  document.body.style.paddingRight=sb+'px';
  document.body.style.overflow='hidden';
  document.getElementById('pdpOverlay').classList.add('open');
  document.getElementById('pdp').classList.add('open');
}

function pdpScroll(delta){
  const el=document.getElementById('pdpScroll');
  if(el) el.scrollBy({top:delta,behavior:'smooth'});
}

function escJs(t){return String(t).replace(/'/g,"\\'").replace(/\\/g,'\\\\')}

function selOpt(el,group,choice){
  /* Deselect siblings in same group */
  const grp=el.closest('.opt-group');
  grp.querySelectorAll('.opt-row').forEach(r=>r.classList.remove('sel'));
  el.classList.add('sel');
  curSel[group]=choice;
}

function toggleAdd(el,choice){
  el.classList.toggle('sel');
  if(el.classList.contains('sel')) curAdd.add(choice);
  else curAdd.delete(choice);
}

function closePDP(){
  document.getElementById('pdpOverlay').classList.remove('open');
  document.getElementById('pdp').classList.remove('open');
  document.body.style.overflow='';
  document.body.style.paddingRight='';
  // Close all accordion items
  document.querySelectorAll('.acc-item').forEach(i=>i.classList.remove('open'));
}

function toggleAcc(id){
  const item=document.getElementById(id);
  const isOpen=item.classList.contains('open');
  // Close all, then open the clicked one if it was closed
  document.querySelectorAll('.acc-item').forEach(i=>i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

function cQty(d){
  curQty=Math.max(1,curQty+d);
  document.getElementById('qtyN').textContent=curQty;
  updSub();
}
function updSub(){
  if(curItem){
    const total=curItem.price*curQty;
    document.getElementById('pdpSub').textContent=`R${total}`;
    document.getElementById('pdpFootPrice').textContent=`R${total}`;
  }
}

function addToCart(){
  if(!curItem) return;
  const note=document.getElementById('pdpNote').value.trim();
  const selParts=Object.entries(curSel).map(([k,v])=>`${k}: ${v}`);
  const addParts=[...curAdd];
  const opts=[...selParts,...addParts].join(' · ');
  const key=`${curItem.id}|${opts}|${note}`;
  const ex=cart.find(c=>c.key===key);
  if(ex){ex.qty+=curQty;}
  else{cart.push({key,id:curItem.id,name:curItem.name,img:curItem.img,price:curItem.price,qty:curQty,opts,note});}
  updateCartUI();
  closePDP();
  const b=document.getElementById('cartBadge');
  b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
  toast(`Added — ${curItem.name}`);
}

/* ── SEARCH ────────────────────────────────────────────── */
let sTimer=null;
function initSearch(){
  const inp=document.getElementById('navSearchInput');
  const dd=document.getElementById('searchDropdown');
  inp.addEventListener('input',()=>{clearTimeout(sTimer);sTimer=setTimeout(()=>runSearch(inp.value,document.getElementById('sdHeader'),document.getElementById('sdList'),dd),100);});
  inp.addEventListener('focus',()=>{if(inp.value.trim())dd.classList.add('active');});
  inp.addEventListener('keydown',(e)=>{if(e.key==='Escape'){dd.classList.remove('active');inp.value='';inp.blur();}});
  document.addEventListener('click',(e)=>{if(!e.target.closest('#navSearchWrap'))dd.classList.remove('active');});
  const mobInp=document.getElementById('mobSearchInput');
  const mobDd=document.getElementById('mobSearchDropdown');
  mobInp.addEventListener('input',()=>{clearTimeout(sTimer);sTimer=setTimeout(()=>runSearch(mobInp.value,document.getElementById('mobSdHeader'),document.getElementById('mobSdList'),mobDd,true),100);});
}
function runSearch(query,headerEl,listEl,dropdown,isMobile){
  const q=query.trim().toLowerCase();
  if(!q){dropdown.classList.remove('active');return;}
  const results=ITEMS.filter(i=>i.name.toLowerCase().includes(q)||i.desc.toLowerCase().includes(q)||i.cat.toLowerCase().includes(q)).slice(0,10);
  if(!results.length){
    headerEl.textContent='No results found';
    listEl.innerHTML=`<div class="sd-empty">Nothing matched "<strong>${h(query)}</strong>"</div>`;
  } else {
    headerEl.textContent=`${results.length} result${results.length!==1?'s':''} found`;
    listEl.innerHTML=results.map(item=>{
      const cat=CATS.find(c=>c.id===item.cat)?.label||item.cat;
      const fn=isMobile?`openPDPMob(${item.id})`:`openPDPDesk(${item.id})`;
      return`<div class="sd-item" onclick="${fn}">
        <img class="sd-item-img" src="${item.img}" alt="${h(item.name)}" loading="lazy">
        <div class="sd-item-info"><div class="sd-item-name">${highlight(item.name,query)}</div><div class="sd-item-cat">${h(cat)}</div></div>
        <div class="sd-item-price">R${item.price}</div>
      </div>`;
    }).join('');
  }
  dropdown.classList.add('active');
}
function openPDPDesk(id){document.getElementById('searchDropdown').classList.remove('active');document.getElementById('navSearchInput').value='';openPDP(id);}
function openPDPMob(id){document.getElementById('mobSearchDropdown').classList.remove('active');document.getElementById('mobSearchInput').value='';closeMob();setTimeout(()=>openPDP(id),280);}

/* ── SCROLL SPY ────────────────────────────────────────── */
function initScrollSpy(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const id=e.target.id.replace('cat-','');
        document.querySelectorAll('.sb-item').forEach(el=>{
          const isActive=el.dataset.cat===id;
          el.classList.toggle('active',isActive);
          // On mobile: scroll the active pill into view inside the sticky bar
          if(isActive && window.innerWidth<=768){
            el.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
          }
        });
      }
    });
  },{rootMargin:'-72px 0px -60% 0px',threshold:0});
  document.querySelectorAll('.menu-section').forEach(s=>obs.observe(s));
}
function initNavScroll(){window.addEventListener('scroll',()=>document.getElementById('topnav').classList.toggle('scrolled',scrollY>10),{passive:true});}
function initBackTop(){const btn=document.getElementById('backTop');window.addEventListener('scroll',()=>btn.classList.toggle('show',scrollY>400),{passive:true});}

/* ── CART ──────────────────────────────────────────────── */
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('cartOv').classList.add('open');document.body.style.overflow='hidden';}
function closeCart(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('cartOv').classList.remove('open');document.body.style.overflow='';}
function updateCartUI(){document.getElementById('cartBadge').textContent=cart.reduce((s,i)=>s+i.qty,0);renderCart();renderTotals();}
function renderCart(){
  const el=document.getElementById('cartList'),foot=document.getElementById('cartFoot');
  if(!cart.length){
    el.innerHTML=`<div class="cart-empty"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#C8C8C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><div class="cart-empty-title">Your cart is empty</div><div style="font-size:.82rem;color:var(--gray-500)">Add something delicious!</div></div>`;
    foot.style.display='none'; return;
  }
  foot.style.display='block';
  el.innerHTML=cart.map((item,i)=>`
    <div class="cart-item">
      <img class="ci-img" src="${item.img}" alt="${h(item.name)}" loading="lazy">
      <div class="ci-info">
        <div class="ci-name">${h(item.name)}</div>
        ${item.opts?`<div class="ci-opts">${h(item.opts)}</div>`:''}
        ${item.note?`<div class="ci-opts" style="color:var(--green-mid)">📝 ${h(item.note)}</div>`:''}
        <div class="ci-ctrls">
          <button class="cq-btn" onclick="cCartQty(${i},-1)"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
          <span class="cq-n">${item.qty}</span>
          <button class="cq-btn" onclick="cCartQty(${i},1)"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
          <button class="rm-btn" onclick="rmItem(${i})">Remove</button>
        </div>
      </div>
      <div class="ci-price">R${item.price*item.qty}</div>
    </div>`).join('');
}
function cCartQty(i,d){cart[i].qty=Math.max(1,cart[i].qty+d);updateCartUI();}
function rmItem(i){cart.splice(i,1);updateCartUI();}
function getSub(){return cart.reduce((s,i)=>s+i.price*i.qty,0);}
function getDel(){return delivMethod==='delivery'?25:0;}
function getTotal(){return getSub()+getDel();}
function renderTotals(){document.getElementById('cSub').textContent=`R${getSub()}`;document.getElementById('cDel').textContent=getDel()===0?'Free':`R${getDel()}`;document.getElementById('cGrand').textContent=`R${getTotal()}`;}

/* ── CHECKOUT ──────────────────────────────────────────── */
const CK_TITLES=['Your Details','Delivery Address','Payment'];
function openCheckout(){if(!cart.length){toast('Your cart is empty!');return;}ckStep=1;renderCkStep();document.getElementById('ckBd').classList.add('open');closeCart();document.body.style.overflow='hidden';}
function closeCheckout(){document.getElementById('ckBd').classList.remove('open');document.body.style.overflow='';document.getElementById('ckSucc').classList.remove('active');document.querySelectorAll('.ck-step').forEach(s=>s.style.display='');ckStep=1;renderCkStep();}
function renderCkStep(){document.querySelectorAll('.ck-step').forEach((el,i)=>el.classList.toggle('active',i+1===ckStep));document.getElementById('ckTitle').textContent=CK_TITLES[ckStep-1]||'';document.getElementById('ckPips').innerHTML=[1,2,3].map(n=>`<div class="pip ${n<ckStep?'done':n===ckStep?'active':'future'}"></div>`).join('');document.getElementById('ckScroll').scrollTop=0;}
function ckNext(){
  if(ckStep===1){if(!document.getElementById('fName').value.trim()||!document.getElementById('fPhone').value.trim()){toast('Please fill in your name and phone number.');return;}}
  if(ckStep===2&&delivMethod==='delivery'){if(!document.getElementById('fAddr').value.trim()){toast('Please enter your delivery address.');return;}}
  if(ckStep<3){ckStep++;renderCkStep();}
  if(ckStep===3)renderMiniSum();
}
function ckPrev(){if(ckStep>1){ckStep--;renderCkStep();}}
function setDeliv(m){delivMethod=m;document.getElementById('dOpt1').classList.toggle('sel',m==='delivery');document.getElementById('dOpt2').classList.toggle('sel',m==='pickup');document.getElementById('addrSec').style.display=m==='delivery'?'block':'none';document.getElementById('pickupSec').style.display=m==='pickup'?'block':'none';renderTotals();}
function selPay(el,m){payMethod=m;document.querySelectorAll('.p-opt').forEach(o=>o.classList.remove('sel'));el.classList.add('sel');}
function renderMiniSum(){const el=document.getElementById('miniItems');el.innerHTML=cart.map(i=>`<div class="mini-row"><span>${h(i.name)} ×${i.qty}</span><span>R${i.price*i.qty}</span></div>`).join('');if(getDel())el.innerHTML+=`<div class="mini-row"><span>Delivery</span><span>R${getDel()}</span></div>`;document.getElementById('miniTot').textContent=`R${getTotal()}`;}
function placeOrder(){const ref='FBK-'+Math.floor(1000+Math.random()*9000);document.getElementById('oRef').textContent=ref;document.querySelectorAll('.ck-step').forEach(s=>s.classList.remove('active'));document.getElementById('ckSucc').classList.add('active');document.getElementById('ckTitle').textContent='Thank you!';document.getElementById('ckPips').innerHTML='';cart=[];updateCartUI();}

/* ── TOAST ─────────────────────────────────────────────── */
function toast(msg){const c=document.getElementById('toasts');const t=document.createElement('div');t.className='toast';t.innerHTML=`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5BE09A" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>${h(msg)}`;c.appendChild(t);setTimeout(()=>t.remove(),3200);}

/* ── MOBILE NAV ────────────────────────────────────────── */
function openMob(){document.getElementById('mobNav').classList.add('open');document.body.style.overflow='hidden';}
function closeMob(){document.getElementById('mobNav').classList.remove('open');document.getElementById('mobSearchDropdown').classList.remove('active');document.getElementById('mobSearchInput').value='';document.body.style.overflow='';}

/* ── APP EXCLUSIVE MODAL ───────────────────────────────── */
/* ── EXCLUSIVE DEALS CAROUSEL ──────────────────────────── */
let exclIdx=0, exclPaused=false, exclTimer=null;
const EXCL_DURATION=6000;

function exclGoTo(idx, dir){
  const track=document.getElementById('appDealGrid');
  const wrap=document.getElementById('appExclWrap');
  const cards=Array.from(track.querySelectorAll('.app-deal-card'));
  const total=cards.length;
  const prevIdx=exclIdx;
  exclIdx=((idx%total)+total)%total;
  const direction=(dir!==undefined)?dir:(exclIdx>=prevIdx?1:-1);

  // Slide track
  track.style.transform=`translateX(-${exclIdx*wrap.offsetWidth}px)`;

  // Animate the incoming card's children after slide completes (380ms)
  const card=cards[exclIdx];
  const info=card.querySelector('.app-deal-info');
  const imgWrap=card.querySelector('.app-deal-img-wrap');

  // Reset to hidden start positions immediately
  if(info){
    info.style.transition='none';
    info.style.opacity='0';
    info.style.transform='translateY(30px)';
  }
  if(imgWrap){
    imgWrap.style.transition='none';
    imgWrap.style.opacity='0';
    imgWrap.style.transform=direction>=0?'translateX(50px) scale(0.95)':'translateX(-50px) scale(0.95)';
  }

  setTimeout(()=>{
    if(info){
      info.style.transition='opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)';
      info.style.opacity='1';
      info.style.transform='translateY(0)';
    }
    if(imgWrap){
      imgWrap.style.transition='opacity 0.55s ease 0.1s, transform 0.55s cubic-bezier(0.22,1,0.36,1) 0.1s';
      imgWrap.style.opacity='1';
      imgWrap.style.transform='translateX(0) scale(1)';
    }
  }, 380);

  // Progress bars
  const dots=document.querySelectorAll('#exclDots .excl-carousel-dot');
  dots.forEach((d,i)=>{
    const span=d.querySelector('.excl-dot-fill');
    if(!span) return;
    span.style.transition='none';
    span.style.width=i<exclIdx?'100%':'0%';
  });

  // Counter
  document.getElementById('exclCounter').textContent=`${exclIdx+1} / ${total}`;

  exclStopTimers();
  if(!exclPaused) exclStartTimers();
}

function exclCarouselMove(dir){ exclGoTo(exclIdx+dir, dir); }

function exclStartTimers(){
  const dots=document.querySelectorAll('#exclDots .excl-carousel-dot');
  const span=dots[exclIdx]&&dots[exclIdx].querySelector('.excl-dot-fill');
  if(span){
    span.style.transition='none';
    span.style.width='0%';
    void span.offsetWidth;
    span.style.transition=`width ${EXCL_DURATION}ms linear`;
    span.style.width='100%';
  }
  exclTimer=setTimeout(()=>exclGoTo(exclIdx+1,1), EXCL_DURATION);
}

function exclStopTimers(){
  clearTimeout(exclTimer);
  document.querySelectorAll('#exclDots .excl-carousel-dot').forEach(d=>{
    const span=d.querySelector('.excl-dot-fill');
    if(!span) return;
    const w=span.getBoundingClientRect().width;
    const pw=d.getBoundingClientRect().width;
    if(pw>0){ span.style.transition='none'; span.style.width=(w/pw*100)+'%'; }
  });
}

function exclTogglePause(){
  exclPaused=!exclPaused;
  document.getElementById('exclPauseIcon').style.display=exclPaused?'none':'block';
  document.getElementById('exclPlayIcon').style.display=exclPaused?'block':'none';
  exclPaused?exclStopTimers():exclStartTimers();
}

function initExclCarousel(){
  const track=document.getElementById('appDealGrid');
  const wrap=document.getElementById('appExclWrap');

  // Inject fill spans
  document.querySelectorAll('#exclDots .excl-carousel-dot').forEach(d=>{
    if(!d.querySelector('.excl-dot-fill')){
      const s=document.createElement('span');
      s.className='excl-dot-fill';
      d.appendChild(s);
    }
  });

  // Size cards
  const setW=()=>{
    const w=wrap.offsetWidth;
    track.querySelectorAll('.app-deal-card').forEach(c=>c.style.width=w+'px');
    if(exclIdx>0) track.style.transform=`translateX(-${exclIdx*w}px)`;
  };
  setW();
  window.addEventListener('resize',setW,{passive:true});

  // Swipe
  let sx=0;
  wrap.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
  wrap.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-sx;
    if(Math.abs(dx)>40) exclCarouselMove(dx<0?1:-1);
  },{passive:true});

  exclGoTo(0,1);
}

function openAppModal(itemName){
  document.getElementById('appDlItemName').textContent=itemName||'Exclusive Deal';
  document.getElementById('appDlModalOv').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeAppModal(){
  document.getElementById('appDlModalOv').classList.remove('open');
  document.body.style.overflow='';
}
// Close on overlay click
document.getElementById('appDlModalOv').addEventListener('click',function(e){
  if(e.target===this) closeAppModal();
});













/* ── KEYBOARD ──────────────────────────── */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(document.getElementById('pdp').classList.contains('open')){closePDP();}
    else if(document.getElementById('cartDrawer').classList.contains('open')){closeCart();}
    else if(document.getElementById('ckBd').classList.contains('open')){closeCheckout();}
    else if(document.getElementById('mobNav').classList.contains('open')){closeMob();}
  }
});