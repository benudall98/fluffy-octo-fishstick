import { Container } from 'inversify';
import { ProductService } from './product.service';
import { EnquiryService } from './enquiry.service';

const container = new Container();

// Bind services to container
container.bind<ProductService>(ProductService).toSelf();
container.bind<EnquiryService>(EnquiryService).toSelf();

export { container };
