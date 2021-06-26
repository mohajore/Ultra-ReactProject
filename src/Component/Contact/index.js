import React from 'react';
import {Drop,DropTitle,Span,Form,FormInput,InputText,InputEmail,InputExp,TextArea,
  InputSubmit} from './style';
  import Footer from '../Footer';
const Contact = ()=> {
  return (
    <React.Fragment>
      <Drop>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text" class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </Drop>
        <Footer/>
    </React.Fragment>
  );
}

export default Contact;
