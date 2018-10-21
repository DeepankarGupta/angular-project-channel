import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username')
    this.profileService.getUserProfile(this.username)
      .subscribe(
        (data) => {
        })
  }

}
