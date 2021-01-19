 
$(function(){

    var title='Nome',moy='Moyenne',dec='Decision',nni='Numero Nationale',serie='serie';
// Language 
     function arabic(){
          $(".ar").css('background-color','#007bff');
        $(".fr").css('background-color','#adb5bd');
      $("#input").attr('placeholder','قم بإدخال رقم الباكلوريا أو الرقم الوطني ');
      $("#btnn").attr('value','بحث');
      $("body").attr('style','font-family:Cairo;');
      title='الإسم ';moy='المعدل';dec='القرار';nni='الرقم الوطني';serie='الشعبة';Admin='نـــاجح ';
       session='الدوة التكميلية';Ajourn='راســب';
          $(".alert").text("قم بإدخال رقم صالح");
      
                ser();
         $(".card-body").attr('dir','rtl');
        $(".card-body").css('text-align','right');
        if($("input").val()=='' || $("input").val().length>5){
            $(".card-header").text(title);
         $(".card-title").text(moy);
         $(".card-text").text(nni);
         $(".card-decision").text(dec);
         $(".card-serie").text(serie);
        }
    
    }
     function france(){
      $(".fr").css('background-color','#007bff');
        $(".ar").css('background-color','#adb5bd');
      $("#input").attr('placeholder','Entrer Le numéero de Bac ou NNI');
      $("#btnn").attr('value','Recherche');
      $("body").attr('style','');
       title='Nome';moy='Moyenne';dec='Decision';nni='Numero Nationale';serie='serie';Admin='Admin';
       session='Sessionaire';Ajourn='Ajourné';
           $(".alert").text("Entrer un numéro corrécte");
       ser();
        $(".card-body").attr('dir','ltr');
        $(".card-body").css('text-align','left');
         if($("input").val()=='' || $("input").val().length>5){
            $(".card-header").text(title);
         $(".card-title").text(moy);
         $(".card-text").text(nni);
         $(".card-decision").text(dec);
         $(".card-serie").text(serie);
        }
         
     }

      france(); 
     $(".ar").click(function(){
      lang='ar';
      console.log(title);
      arabic();
     });

      $(".fr").click(function(){
      lang='fr';
      console.log(title);
      france();
     });
              



     
          var al=true;
          function ser() {
         var v =$("input").val();
          console.log(v);
          
      for (var i = 0; i < bac.length; i++) {
      if ($("input").val()==bac[i].nBac ||$("input").val()==bac[i].nni )
       {$(".card").show();
   // creer moy
          moyenne= String(bac[i].moyenne);
         nbac=String(bac[i].nBac);
         switch(nbac.length){
    case 1:nbac="0000"+nbac; break;
      case 2:nbac="000"+nbac; break; case 3:nbac="00"+nbac; break; case 4:nbac="0"+nbac}
         $(".card-header").text(bac[i].nom);
         $(".card-title").html(moy+' : <span class="moy">'+moyenne.slice(0,4)+'</span>');
         $(".card-text").text(nni+' : '+bac[i].nni);
         $(".card-serie").text(serie+' : '+bac[i].serie);
         $(".card-footer").text("BAC - 2020 - "+nbac);$(".card-footer").show();
         $("#input").val(nbac);
                   if(bac[i].moyenne<8)
                     {$(".moy").attr('class','text-danger moy');
                      $(".card").attr('class','card border-danger mb-3 div ');
                       $(".card-decision").html(dec+' : <span class="text-danger">'+Ajourn+'</span>');}
                   else if(bac[i].moyenne>=10)
                     {$(".moy").attr('class','text-success moy');
                     $(".card").attr('class','card border-success mb-3 div ');
                      $(".card-decision").html(dec+' : <span class="text-success">'+Admin+'</span>');}
                   else
                     {$(".moy").attr('class','text-warning moy');
                     $(".card").attr('class','card border-warning mb-3 div ');
                      $(".card-decision").html(dec+' : <span class="text-warning">'+session+'</span>');}
               al=false; }
   }console.log(al);
      
       }

$("#btnn").click(function(){ser();  if (al==true) {
    $(".alert").show(); $(".card").hide();}
   else { $(".alert").hide();$(".card").show(); al=true;} });


})