import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //fooddetails
  FoodDetails=[
    {
      id:1,
       foodDatafoodName:"pizza ",
      fooodDetails:"micro-oven spicy pizza",
      foodPrice:300,
      foodImg:"https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/576x300/image.jpg" 
    },
    {
      id:2,
      foodName:"Berger",
      fooodDetails:"micro-oven spicy berger",
      foodPrice:450,
      foodImg:"https://thumbs.dreamstime.com/b/beef-berger-fried-potato-wood-fast-food-junk-food-78373894.jpg"
    },
    {
      id:3,
      foodName:"chocalate IceCream",
      fooodDetails:"chocalate falavour",
      foodPrice:250,
      foodImg:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg"
    },
    {
      id:4,
      foodName:"Chapathi",
      fooodDetails:"pan chappathi",
      foodPrice:150,
      foodImg:"https://www.veganricha.com/wp-content/uploads/2011/06/june3-2B008.jpg "
    },
    {
      id:5,
      foodName:"spicy potato chips",
      fooodDetails:"oil dry food",
      foodPrice:50,
      foodImg:"https://www.shutterstock.com/image-photo/spicy-potato-chips-white-bowl-260nw-1815223880.jpg "
    }
  ]
}
