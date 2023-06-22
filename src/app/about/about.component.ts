
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-about',
standalone: true,
imports: [CommonModule],
template: `
<h2>About Our Company</h2> 
<p> "We are a leading home WiFi access point installation company based in South East London. With years of experience and expertise in the field, we provide reliable and efficient WiFi solutions for residential properties in the area. </p> 
<p> Our team of skilled technicians is dedicated to delivering high-quality installations, ensuring seamless WiFi coverage throughout your home. We utilize the latest technology and equipment to optimize your WiFi signal, providing fast and stable internet connectivity for all your devices. </p> 
<p> At our company, we understand the importance of a strong and reliable WiFi connection in today's connected world. Whether you need WiFi for streaming, gaming, remote work, or simply browsing the web, we have the knowledge and tools to create a robust network that meets your specific needs. </p> <p> Customer satisfaction is our top priority, and we strive to provide exceptional service from start to finish. We offer personalized consultations, tailored solutions, and ongoing support to ensure that you have the best WiFi experience possible. </p> 
<p> Contact us today to schedule a consultation and let us transform your home into a WiFi-enabled paradise! </p>
<img src="/assets/portrait.jpg" alt="tech" width="250px" height="250px" >

`
,styleUrls: ['./about.component.css']
})
export class AboutComponent {

}

