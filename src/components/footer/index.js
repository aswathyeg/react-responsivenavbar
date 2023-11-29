import React from 'react';
import{Container,Wrapper,Row,Column,Link,Title} from ',/styles.footer';

export default function Footer({children,...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  ) 
}
Footer.Wrapper=function FooterWrapper({children,...restProps}){
    return<Wrapper{...restProps}>{children}</Wrapper>
}
Footer.Row=function FooterRow({children,...restProps}){
    return<Row{...restProps}>{children}</Row>
}
Footer.Column=function Footercolumn({children,...restProps}){
    return<Column{...restProps}>{children}</Column>
}
Footer.Link=function FooterLink({children,...restProps}){
    return<this.Link{...restProps}>{children}</this.Link>
}
Footer.Title=function FooterTitle({children,...restProps}){
    return<this.Title{...restProps}>{children}</this.Title>
}




 