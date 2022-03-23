//ProductAlertsComponent가 상품 데이터를 받으려면 @angular/core 패키지가 제공하는 Input 심볼을 로드해야 한다.
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

//ProductListComponent(부모 컴폰너트)에서 데이터(Product)를 받는 자식 컴포넌트(ProductAlertsComponent) 만들기

//@Component() 데코레이터는 이 데코레이터가 붙은 클래스가 컴포넌트라는 것을 지정하는 용도로 사용
//@Component() 데코레이터에는 컴포넌트 셀렉터, 템플릿, 스타일에 해당하는 메타데이터를 지정할 수 있다
@Component({
  //app-product-alerts라는 selector는 이 컴포넌트가 어떤 태그 이름으로 사용될지 결정.
  //보통 Angular 컴포넌트는 app-이라는 접두사 뒤에 컴포넌트 이름을 붙인다.
  selector: 'app-product-alerts',
  //컴포넌트에 사용될 HTML 파일과 CSS 파일을 지정
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})

//@Component() 데코레이터 뒤에는 컴포넌트의 동작을 정의할 클래스를 ProductAlertsComponent와 같이 선언
export class ProductAlertsComponent implements OnInit {
  //프로퍼티에 @Input() 데코레이터를 지정하면 해당 프로퍼티의 값을 부모 컴포넌트에서 받아온다는 것을 의미
  //이 컴포넌트의 부모 컴포넌트를 어떻게 연결할 수 있을까?
  @Input() product!: Product;
  constructor() {}

  ngOnInit() {}
}
