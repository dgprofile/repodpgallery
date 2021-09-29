import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import { ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
 

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
    let tlPlane = gsap.timeline({
      scrollTrigger:{
        trigger: ".timeline-hero",
        pin: ".timeline-hero",
        scrub: 1,
        markers: true,
        start: "top top",
        end: "bottom top"
      },
      defaults:{ease: "none",opacity:1}
    })
    .add("end");
    tlPlane
    .to(("#Capa_1"),{
      duration: 5,
      rotate: (130),
      motionPath:{
        //path: ".theline",
        //align: ".theLine",
        alignOrigin: [0.5, 0.5], 
        path: [
          {x:100, y:20},
          {x:200, y:25},
          {x:300, y:30},
          {x:340, y:45},
          {x:380, y:65},
          {x:420, y:85},
          {x:460, y:110},
          {x:500, y:135},
          {x:540, y:185},
          {x:580, y:225},
          {x:620, y:275},
          {x:650, y:340},
          {x:680, y:400},
          {x:700, y:465},
          {x:720, y:555},
          {x:740, y:640},
        ]
      }
    }, "end")
    .to(".place1",{
      delay:0.25,
      opacity:1
    }, "end")
    .to(".place2",{
      delay:0.5,
      opacity:1
    }, "end")
    .to(".place3",{
      delay:0.75,
      opacity:1
    }, "end")
    .to(".place4",{
      delay:1,
      opacity:1
    }, "end")
    .to(".place5",{
      delay:1.25,
      opacity:1
    }, "end")
    .to(".place6",{
      delay:1.5,
      opacity:1
    }, "end")
    .to(".place7",{
      delay:1.75,
      opacity:1
    }, "end")
    .to(".place8",{
      delay:2.0,
      opacity:1
    }, "end")
    .to(".place9",{
      delay:2.25,
      opacity:1
    }, "end")
    .to(".place10",{
      delay:2.5,
      opacity:1
    }, "end")
    .to(".place11",{
      delay:2.75,
      opacity:1
    }, "end");
  }
}
