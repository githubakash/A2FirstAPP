"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.title = "Product List sold by Akash";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.imageVisible = false;
        this.filterBy = 'cart';
        this.error = '';
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.imageVisible = !this.imageVisible;
    };
    //ngOnItit is the place to call the service and get data for component template
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.GetProducts().subscribe(function (products) { return _this.productlist = products; }, function (error) { return _this.error = error; });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        console.log('container got the payload of event from its nested component - ' + message);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: 'app/Products/product-list.component.html',
        styleUrls: ['app/Products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map