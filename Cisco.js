/* code for ask-query button in main 3*/
function ask_query() {
    var main3 = document.querySelector('body > div > div.main3');
    main3.style.display = "block";
    var main1 = document.querySelector('body > div > div.main1');
    main1.style.display = "none";
    var main2 = document.querySelector('body > div > div.main2');
    main2.style.display = "none";
    document.querySelector('body > div > div.main2').style.display = 'none';
    document.querySelector('body > div > div.main4').style.display='none';
}

/* code for post query button in main 3 */
function post_query(){
    document.querySelector('body > div > div.popup').style.display='block';
    var main3 = document.querySelector('body > div > div.main3');
    main3.style.display = "none";
}

/* code for cancle-query button in main 3 */
function cancle_query() {
    var main3 = document.querySelector('body > div > div.main3');
    main3.style.display = "none";
    var main1 = document.querySelector('body > div > div.main1');
    main1.style.display = "block";
    document.querySelector('body > div > div.main2').style.display = "none";
    
    document.querySelector('body > div > div.main4').style.display='none';
}

/* code for accordions */
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}   

/* code for search button in main 1 */
function search(){
    document.querySelector('body > div > div.main2').style.display="block";
}

/* code for hidepopup */
function hidepopup(){
    document.querySelector('body > div > div.popup').style.display='none';
    var main1 = document.querySelector('body > div > div.main1');
    main1.style.display = "block";
}

/* code for product video button in header */
function product_videos(){
    document.querySelector('body > div > div.main4').style.display='block';
    document.querySelector('body > div > div.main1').style.display = "none";

}