import { AbstractControl, FormArray } from '@angular/forms';

export class ProductValidator {
  //validates the product name to ensure not contains 'product'
  static ProductName(control: AbstractControl) {
    const productName = control.value as string;
    if (productName.includes('product')) {
      return {
        invalidProduct: true,
      };
    }
    return null;
  }

  //To validate the productListCount not more than 3
  /*   static ProductMaxCount(control: AbstractControl) {
    const productListCount = control.value;
    if (productListCount.length >= 3) {
      return {
        MaxProductCountReached: true,
      };
    }
    return null;
  } */

  //or
  //does same function as above but max limit value comes from the consumer form
  static ProductMaxCount(value: number) {
    return (control: AbstractControl) => {
      const productListCount = control.value;
      if (productListCount.length >= value) {
        return {
          MaxProductCountExceeded: true,
        };
      }
      return null;
    };
  }

  //To validate the productListCount to have minimum of one product
  // static ProductMinCount(control: AbstractControl) {
  //   const productMinCount = control.value;
  //   if (productMinCount.length <= 1) {
  //     return {
  //       MinProductCountReached: true,
  //     };
  //   }
  //   return null;
  // }

  static ProductMinCount(value: number) {
    return (control: AbstractControl) => {
      const productListCount = control.value;
      if (productListCount.length  <= value) {
        return {
          MinProductCountDeceeded:true 
        };
      }
      // if (productListCount.length === value) {
      //   return {
      //     MinProductCountDeceeded: false,
      //   };
      // }
      return null;
    };
  }
}
