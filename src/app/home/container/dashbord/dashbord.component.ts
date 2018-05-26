import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert';
import {CrudService} from '../../../shared/crud.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  providers:[CrudService]
})
export class DashbordComponent implements OnInit {
  cars: any=[];

  constructor(private http: HttpClient, private crud: CrudService) {
  }

  ngOnInit() {

    this.getAll();

  }
  getAll(){
    this.crud.getAllCars().subscribe(data=>{

      this.cars=data;

    })


  }
  deleteCarById(id,status){
    if(status=='affected'){

      swal("Alert!", "you will not be able to recover this car", "error");
    }

else{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!"+id,
      icon: "warning",
      buttons:[true] ,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          this.crud.deleteCarById(id).subscribe(data=>{
            console.log(data);
            this.getAll();

          })

        } else {
          swal("Your car file is safe!");
        }
      });


  }}

}
