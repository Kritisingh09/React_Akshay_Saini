import React from "react";
import ReactDOM from "react-dom/client";
import data from "./restaurant"

/**
 *Header
 -Logo
 -Nav items 
 *Body
 -Search
 -Restaurants Container
    -Restaurants Card
        -Img
        -Name of Res, Star Rating , Cuisines, delivery time etc
 *Footer
 -Copyright
 -Links
 -Adress
 -Contact Info
 */
 var obj1={
    restaurants: [
        {
          info: {
            "id": "545865",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
            "locality": "Eon Free Zone Road",
            "areaName": "Kharadi",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.7K+",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/the-belgian-waffle-co-eon-free-zone-road-kharadi-rest545865",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "126164",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
            "locality": "PUNE NAGAR ROAD & SANGAMWADI",
            "areaName": "Kharadi",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Kebabs",
              "Mughlai",
              "Beverages",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "1803",
            "avgRatingString": "4.3",
            "totalRatingsString": "3.6K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Biryani.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Biryani.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/behrouz-biryani-nagar-road-and-sangamwadi-kharadi-rest126164",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "74379",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_74379.JPG",
            "locality": "Bhalerao Road",
            "areaName": "Kharadi",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "19K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/mcdonalds-bhalerao-road-kharadi-rest74379",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "24414",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Thite Nagar",
            "areaName": "Kharadi",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "2456",
            "avgRatingString": "4.1",
            "totalRatingsString": "14K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 00:55:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/dominos-pizza-thite-nagar-kharadi-rest24414",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "631081",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_631081.JPG",
            "locality": "Eon Free Zone Road",
            "areaName": "Kharadi",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.1,
            "parentId": "166",
            "avgRatingString": "4.1",
            "totalRatingsString": "7.8K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 06:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/burger-king-eon-free-zone-road-kharadi-rest631081",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "487384",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "g6lxbpl5jliwyfkyieds",
            "locality": "Kharadi",
            "areaName": "Kharadi",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "4961",
            "avgRatingString": "4.1",
            "totalRatingsString": "2.9K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 02:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.7",
                "ratingCount": "349"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/la-pinoz-pizza-kharadi-rest487384",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "31373",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/4ab049e2-9370-4d0c-994f-20616eea4b7d_31373.jpg",
            "locality": "Kharadi",
            "areaName": "Kharadi",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "721",
            "avgRatingString": "4.1",
            "totalRatingsString": "9.4K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 05:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹189"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "1.6K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/pizza-hut-kharadi-rest31373",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "140832",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/a929110e-bc63-4ddb-8132-7c3f037ea5c9_140832.JPG",
            "locality": "Eon Free Zone Road",
            "areaName": "Kharadi",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Rolls & Wraps",
              "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "14K+",
            "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 03:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/kfc-eon-free-zone-road-kharadi-rest140832",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "855656",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/25ee9b9b-0bdb-4dca-b71c-587df46df787_855656.JPG",
            "locality": "Cafeteria",
            "areaName": "Eon 2 IT park",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "68",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/subway-cafeteria-eon-2-it-park-rest855656",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "345940",
            "name": "Theobroma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ff7e0a6e-0267-4a37-90f9-0183dbe297de_345940.jpg",
            "locality": "Kharadi",
            "areaName": "Kharadi",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "1040",
            "avgRatingString": "4.5",
            "totalRatingsString": "3.6K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "563"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/theobroma-kharadi-rest345940",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "77625",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "F Bramha Residences",
            "areaName": "Wadgaon Sheri",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.7",
            "totalRatingsString": "2.3K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 00:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/baskin-robbins-ice-cream-desserts-f-bramha-residences-wadgaon-sheri-rest77625",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "126169",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/5d84e194-c42e-4d70-af26-4d3071f4c27b_126169.JPG",
            "locality": "PUNE NAGAR ROAD & SANGAMWADI",
            "areaName": "Kharadi",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Desserts",
              "Bakery",
              "Ice Cream",
              "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "4444",
            "avgRatingString": "4.3",
            "totalRatingsString": "690",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/sweet-truth-cake-and-desserts-nagar-road-and-sangamwadi-kharadi-rest126169",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "191355",
            "name": "The Biryani Life",
            "cloudinaryImageId": "h8le5esparovf52smqjk",
            "locality": "PUNE NAGAR ROAD & SANGAMWADI",
            "areaName": "Kharadi",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Biryani",
              "Mughlai",
              "Lucknowi",
              "Hyderabadi",
              "Kebabs",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "8496",
            "avgRatingString": "4.1",
            "totalRatingsString": "1.0K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹159",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/the-biryani-life-nagar-road-and-sangamwadi-kharadi-rest191355",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "754377",
            "name": "Wendy's Burgers",
            "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
            "locality": "PUNE NAGAR ROAD & SANGAMWADI",
            "areaName": "Kharadi",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "972",
            "avgRatingString": "4.1",
            "totalRatingsString": "1.1K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/wendys-burgers-nagar-road-and-sangamwadi-kharadi-rest754377",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "156178",
            "name": "The Good Bowl",
            "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
            "locality": "Kharadi FC",
            "areaName": "Kharadi",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "7918",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.4K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/the-good-bowl-fc-kharadi-rest156178",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "864947",
            "name": "Bakingo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/a22d64db-6011-484c-8f6a-2d9fcce402b0_864947.JPG",
            "locality": "Galande Nagar",
            "areaName": "Wadagaon Sheri, Haveli",
            "costForTwo": "₹299 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages",
              "Snacks"
            ],
            "avgRating": 4.5,
            "parentId": "3818",
            "avgRatingString": "4.5",
            "totalRatingsString": "558",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/bakingo-galande-nagar-wadagaon-sheri-haveli-rest864947",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "401106",
            "name": "Kwality Walls Ice Cream and More",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/d90a90c7-9375-4b3e-82f2-52dc7cb30788_401106.JPG",
            "locality": "Yashwant Nagar",
            "areaName": "Kharadi",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Ice Cream"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "188",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-12 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/kwality-walls-ice-cream-and-more-yashwant-nagar-kharadi-rest401106",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "64060",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
            "locality": "Ghorpadi Nagar",
            "areaName": "Mundwa",
            "costForTwo": "₹120 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.7",
            "totalRatingsString": "15K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/nic-ice-creams-ghorpadi-nagar-mundwa-rest64060",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "27808",
            "name": "Natural Ice Cream",
            "cloudinaryImageId": "enrdjjyhr7nj3jxpdh3d",
            "locality": "Dhole Patil Road",
            "areaName": "Kharadi",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "2093",
            "avgRatingString": "4.7",
            "totalRatingsString": "5.3K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/natural-ice-cream-dhole-patil-road-kharadi-rest27808",
            "type": "WEBLINK"
          }
        },
        {
          info: {
            "id": "289345",
            "name": "BOX8 - Desi Meals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/53d0947c-01c4-49ec-b98b-acfb5eb07339_289345.jpg",
            "locality": "Eon Free Zone Road",
            "areaName": "Kharadi",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Thalis",
              "Home Food"
            ],
            "avgRating": 4.4,
            "parentId": "10655",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.6K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "15-25 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-13 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                  "description": "Delivery!"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/pune/box8-desi-meals-eon-free-zone-road-kharadi-rest289345",
            "type": "WEBLINK"
          }
        }
      ]
}
// const obj={
// //     data:{
// //    cuisine:"South Indian",
// //     resName:"Curry leaves"
// //     }
//     data: {
//         "id": "545865",
//         "name": "The Belgian Waffle Co.",
//         "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
//         "locality": "Eon Free Zone Road",
//         "areaName": "Kharadi",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Waffle",
//           "Desserts",
//           "Ice Cream"
//         ],
//         "avgRating": 4.5,
//         "veg": true,
//         "parentId": "2233",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1.7K+",
//         sla: {
//           "deliveryTime": 37,
//           "lastMileTravel": 2.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "2.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         availability: {
//           "nextCloseTime": "2024-09-13 02:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "Rxawards/_CATEGORY-Desserts.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Desserts.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "20% OFF",
//           "subHeader": "UPTO ₹50"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
 
// }
const Header=()=>{
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-burger-logo-design-for-company-template-71afa5c61d9934a4b11a2f1754f418a1_screen.jpg?ts=1679924100"></img>
        </div>
        <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        
           </ul>
        </div>
    </div>)
}
const RestaurantCard=(props)=>{

    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla,costForTwo}=resData.info;
   // var a=resData.info.cloudinaryImageId;
    console.log("resData",resData.info);
    return (
        <div class="res-card">
             <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <div className="res-body">
            <div className="res-title">{name}</div>
           <span className="res-description">{cuisines.join(",")}</span>
          <ul class="res-footer">
          <li className="res-rating">{avgRatingString}</li>
           <li>{sla.deliveryTime}</li>
           <li>{costForTwo}</li>
          </ul>
            </div>
            <div className="res-sec">
                40% off | Use SPECIALS
            </div>
            <div className="res-detail">
                <span>View Details</span>
            </div>
        </div>
        
        
    )
}
const Body=()=>{

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {obj1.restaurants.map(restaurants=> 
                <RestaurantCard key={restaurants.id} resData={restaurants}/>)
                }
             
            </div>

        </div>
    )
}
const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>) // this is how babel understands to render a component


