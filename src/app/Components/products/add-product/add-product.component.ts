import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductValidator } from './myValidators/product-count-validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  formSubmitted: Boolean = false;
  submitProduct() {
    console.log(this.NewProductForm.value);
     this.formSubmitted = true;
    // this.NewProductForm.reset({
    //   audit: {
    //     sellerID: '',
    //     sellerName: '',
    //     lastUpdated:'',
    //   },
    //   newProducts: [
    //     {
    //       id: '',
    //       name: '',
    //       price: '',
    //       totalStocks: '',
    //       category: '',
    //     },
    //   ],
    // });
    //or
    //this.NewProductForm.reset({});
  }

  constructor(private _formBuilder: FormBuilder) {}

  NewProductForm!: FormGroup;

  get newProducts() {
    return this.NewProductForm.get('newProducts') as FormArray;
  }

  //to restrict the user from adding more than three product
  /* 
   newProducts: this._formBuilder.array([this.newProductGenerator()], {
          validators: [ProductValidator.ProductMaxCount],
        }),
  */
  ngOnInit() {
    //to create the formgroup,formcontrols and nested form Arrays and so  on
    this.NewProductForm = this._formBuilder.group(
      {
        audit: this._formBuilder.group(this.sellerDataInit()),
        newProducts: this._formBuilder.array([this.newProductGenerator()], [
          ProductValidator.ProductMaxCount(5),
          // ProductValidator.ProductMinCount(1)
        ]),
      }
      /*valueChange Listens and logs for every updateOn call
       updateOn is called and valuechange logs the state for every

       1.change (default) - for any change anywhere in the form
       2.blur - if a field is filled and moved to other field by user 
       3.submit - only logs after submitting the form
     */
      // ,{
      //   updateOn:'submit'
      // }
    );

    this.formInit();

    //subscribes to any changes and logs the each and every state changes
    // this.NewProductForm.valueChanges.subscribe(data => {
    //   console.log(data);
    // })
  }

  formInit() {
    //use setValue() to add default value to all fields,
    //use pathValue() to add default value to selected fields
    this.NewProductForm.patchValue({
      audit: {
        sellerID: `S_${Math.floor(Math.random() * 100000)}`,
        lastUpdated: new Date(),
      },
      newProducts: [
        {
          id: `P_${Math.floor(Math.random() * 100000)}`,
        },
      ],
    });
  }

  sellerDataInit() {
    return {
      sellerID: [{ value: '', disabled: true }],
      sellerName: [
        '',
        [
          Validators.minLength(6),
          Validators.maxLength(15),
          Validators.required,
        ],
      ],
      lastUpdated: [''],
    };
  }

  newProductGenerator() {
    return this._formBuilder.group({
      id: [{ value: '', disabled: true }],
      name: [
        '',
        [
          Validators.maxLength(17),
          Validators.minLength(4),
          Validators.required,
          ProductValidator.ProductName,
          Validators.pattern(/^[a-zA-Z /s]+$/),
        ],
      ],
      price: ['', [Validators.min(1), Validators.required]],
      totalStocks: ['', [Validators.min(10), Validators.required]],
      category: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  AddProduct() {
    console.log('new product added');

    this.newProducts.push(this.newProductGenerator());
  }

  DeleteProduct(i: number) {
    this.newProducts.removeAt(i);
  }
}
