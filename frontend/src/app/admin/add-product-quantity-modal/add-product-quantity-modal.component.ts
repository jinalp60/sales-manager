import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product-quantity-modal',
  templateUrl: './add-product-quantity-modal.component.html',
  styleUrls: ['./add-product-quantity-modal.component.scss']
})
export class AddProductQuantityModalComponent implements OnInit {
  @Input() public product;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.product);
  }
  passBack() {
    console.log('passback function');
    this.activeModal.close(this.product);
  }
}
