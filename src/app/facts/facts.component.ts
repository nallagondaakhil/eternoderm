import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  constructor() { }

  ngAfterViewChecked() {
    $(document).ready(function() {
 
      $('.faq_question').click(function() {
   
          if ($(this).parent().is('.open')){
              $(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},500);
              $(this).closest('.faq').removeClass('open');
   
              }else{
                  var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
                  $(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},500);
                  $(this).closest('.faq').addClass('open');
              }
   
      });
   
  });
  }
  ngOnInit() {
  }

}
