import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../../shared/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idCar: any;
  car: any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient ,private routeTo:Router, private crud: CrudService) {
    this.route.params.subscribe(
      params => {
        this.idCar = params['id'];
        console.log(this.idCar);

      });
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/cars/' + this.idCar)
      .subscribe(data => {
          this.car = data;
          this.car.affected_date = this.car.affected_date.slice(0,10);

        }
      );
  }

  editCar() {
    this.crud.updateCarById(this.idCar,this.car).subscribe(data=>
    {
      console.log(data);
      this.routeTo.navigate(['/'])

    })

  }

}
