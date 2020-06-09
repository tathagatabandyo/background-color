var r,g,b,c,a,p=1,stop,call=1;

        r=document.querySelector("#r1").value
        g=document.querySelector("#r2").value
        b=document.querySelector("#r3").value
        a=document.querySelector("#r4").value

        document.getElementById("s1").innerText="R : "+r;
        document.getElementById("s2").innerText="G : " + g;
        document.getElementById("s3").innerText="B : " + b;
        document.getElementById("s4").innerText="A : " + a;

        c="rgba(" + r + "," + g +"," + b + "," + a + ")";

        document.body.style.background=c;

        document.querySelector("h1").innerText=c;

        document.getElementById("r1").addEventListener("input",ran);
        document.getElementById("r2").addEventListener("input",ran);
        document.getElementById("r3").addEventListener("input",ran);
        document.getElementById("r4").addEventListener("input",ran);

        document.getElementById("b1").addEventListener("click",start_a);
        document.getElementById("b2").addEventListener("click",stop_a);

        stop = setInterval(r1,20);
            function start_a() {
                if(call==0) {
                    call=1;
                    stop = setInterval(r1,20);
                }
                else {
                    document.getElementById("b1").style.background="red";
                }
        }
        
        

        function stop_a() {
            call=0;
            document.getElementById("b1").style.background="";
            clearInterval(stop);
        }
        

        var c1=0,c2=0,c3=0;
        function r1() {
            
            r=document.querySelector("#r1").value
            g=document.querySelector("#r2").value
            b=document.querySelector("#r3").value
            a=document.querySelector("#r4").value
            // r++;
            //g--;// g++;
            // b++;
            
            // console.log(!(r>=0 && r<256));
            //r
            if(r==0) {
                c1=0;
            }
            else if(r==255) {
                c1=1;
            }

            if(c1==0) {
                r++;
            }
            else if(c1==1) {
                r--;
            }

            //g
            if(g==0) {
                c2=0;
            }
            else if(g==255) {
                c2=1;
            }
            if(c2==0) {
                g++;
            }
            else if(c2==1) {
                g--;
            }
            
            //b
            if(b==0) {
                c3=0;
            }
            else if(b==255) {
                c3=1;
            }

            if(c3==0) {
                b++;
            }
            else if(c3==1) {
                b--;
            }
            
            
            c="rgba(" + r + "," + g +"," + b + "," + a + ")";
            
            document.querySelector("#r1").value=r;
            document.querySelector("#r2").value=g;
            document.querySelector("#r3").value=b;

            document.body.style.background=c;
            document.querySelector("#h1").innerText=c;

            document.getElementById("s1").innerText="R : "+r;
            document.getElementById("s2").innerText="G : " + g;
            document.getElementById("s3").innerText="B : " + b;
            document.getElementById("s4").innerText="A : " + a;
        }
        function ran() {
            
            r=document.querySelector("#r1").value;
            g=document.querySelector("#r2").value;
            b=document.querySelector("#r3").value;
            a=document.querySelector("#r4").value;
            
            c="rgba(" + r + "," + g +"," + b + "," + a + ")";

            document.body.style.background=c;

            document.querySelector("#h1").innerText=c;
            
            document.getElementById("s1").innerText="R : "+r;
            document.getElementById("s2").innerText="G : " + g;
            document.getElementById("s3").innerText="B : " + b;
            document.getElementById("s4").innerText="A : " + a;
            
        }