






class height{

    constructor(){
        var main = document.getElementById("main");
        var div = document.getElementById("div");
        var styll = document.getElementById("styll");

        main.style.height = screen.height + "px" ;


        if(screen.width < 621)
            { main.style.width = screen.width  + "px" ;
              div.style.height = screen.height - 120 + "px";
              styll.style.marginLeft = "89%";
            }
            //margin-left: 92%; 

        else { div.style.height = screen.height - 320 + "px" ; }
        
        
    }


}

onload = new height();




// class button

class play{

    constructor(){

        this.audio = document.getElementById("audio");
        this.title = document.getElementById("title");

        this.back_b = document.getElementById("back");
        this.play_b = document.getElementById("play");
        this.pause_b = document.getElementById("pause");
        this.up_b = document.getElementById("up");


        this.play_b.addEventListener("click", () => { this.play_fn(); });
        this.pause_b.addEventListener("click", () => { this.pause_fn(); });
        

        this.name_chaine = [];
        this.name_chaine[0] = " إذاعة موزاييك  " ;
        this.name_chaine[1] = " إذاعة الزيتونة " ;
        this.name_chaine[2] = "  IFM إذاعة" ;
        this.name_chaine[3] = " إذاعة تطاوين " ;
        this.name_chaine[4] = " إذاعة شمس " ;
        this.name_chaine[5] = " إذاعة تونس " ;
        this.name_chaine[6] = " إذاعة جوهرة " ;
        this.name_chaine[7] = " إذاعة إكسبراس " ;
        this.name_chaine[8] = " إذاعة كنووز " ;

        this.src_chaine = [];
        this.src_chaine[0] = "https://radio.mosaiquefm.net/mosalive";
        this.src_chaine[1] = "https://stream6.tanitweb.com/zitounafm";
        this.src_chaine[2] = "https://live.ifm.tn/radio/8000/ifmlive?1585267848";
        this.src_chaine[3] = "http://rtstream.tanitweb.com/tataouine";
        this.src_chaine[4] = "https://stream6.tanitweb.com/shems";
        this.src_chaine[5] = "http://rtstream.tanitweb.com/nationale";
        this.src_chaine[6] = "https://streaming2.toutech.net/jawharafm";
        this.src_chaine[7] = "http://expressfm.ice.infomaniak.ch/expressfm-64.mp3";
        this.src_chaine[8] = "http://streaming.knoozfm.net:8000/knoozfm";

        
       this.i = 0;

       this.set_rec();

       this.back_b.addEventListener("click", () => 
            { 
                if(this.i > 0)
                { --this.i; }
                else { this.i = this.src_chaine.length -1 ; }
                this.set_rec();
                this.play_fn();
                localStorage.setItem("sav", this.i);
            });
       this.up_b.addEventListener("click", () => 
            { 
                if(this.i < this.src_chaine.length -1)
                { ++this.i; }
                else { this.i = 0 ; }
                this.set_rec();
                this.play_fn();
                localStorage.setItem("sav", this.i);
            });
        

    }

     play_fn(){ this.audio.play(); }
     pause_fn(){ this.audio.pause(); }


    set_rec(){

        // if(localStorage.getItem("sav") != null)
        // { this.i = localStorage.getItem("sav"); }

        this.audio.src = this.src_chaine[this.i];
        this.title.innerHTML = this.name_chaine[this.i];
    }




}

onload = new play();





class vol_spd{
    constructor(){

        this.audio = document.getElementById("audio");

        this.volume = document.getElementById("volume");
        this.vitess = document.getElementById("vitess");

        this.audio.volume= 50/100;
        this.vitess.playbackRate = 1;
        
        this.volume.addEventListener("change",()=>{
         this.audio.volume = this.volume.value / 100 ;
        } );

        this.vitess.addEventListener("change",()=>{
            this.audio.playbackRate = this.vitess.value / 100 ;
           } );
    }

}
onload = new vol_spd();










// //--------------------------------
// function update() 

//     {
//         var date = new Date();

//         var set_time = document.getElementById("set_time");
//         var set_time2 = document.getElementById("xx");
//         var set_date = document.getElementById("set_date");
//         var x = 0;
//         var xx = 0;
//         var xxx = 0;

//         if( date.getMinutes() < 10 )
//             { x = "0" + date.getMinutes().toString(); }
//         else  { x = date.getMinutes(); }


//          if( date.getSeconds() < 10 )
//          { xx = "0" + date.getSeconds().toString(); }
//          else  { xx = date.getSeconds(); }

//         if( parseInt( date.getMonth() +1 ) < 10 )
//         { xxx = "0" + parseInt( date.getMonth() +1 ).toString(); }
//         else  { xxx = parseInt( date.getMonth() +1 ); }


        

//         set_time.innerHTML = date.getHours() + ":" + x + ":" ;
        
//          set_time2.innerHTML = xx ;
//          set_time2.style.fontSize = "30px" ;

        
//         set_date.innerHTML = date.getDate() + "-" + xxx + "-" + date.getFullYear();


//     }





// onload = update() ;
// setInterval(update, 120); 



// function get_col() 
//     {
//         var get_col = document.getElementById("set_color").value;
//         localStorage.setItem("color", get_col);
//         document.getElementById("time").style.background = localStorage.getItem("color");
//         document.getElementById("body").style.background = localStorage.getItem("color");



//     }



//     function set_col(){
//         document.getElementById("set_color").value = localStorage.getItem("Color");
//         document.getElementById("time").style.background =localStorage.getItem("Color");
//         document.getElementById("body").style.background = localStorage.getItem("Color");
//         }
        
//setInterval(set_col,2000);







