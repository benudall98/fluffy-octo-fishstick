import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { injectable } from 'inversify';

@injectable()
export class EnquiryService {
  private apiUrl = 'http://localhost:5200/enquiries'; // Update with your backend API endpoint

  constructor(private http: HttpClient) {}

  submitEnquiry(enquiryData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, enquiryData);
  }
}
