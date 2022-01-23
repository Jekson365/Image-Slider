const images = {
    img1: "https://cdn.wallpapersafari.com/98/30/BeTDXk.jpg",
    img2: "https://wallpaperaccess.com/full/1078161.jpg",
    img3:"https://wallpaperaccess.com/full/1078184.jpg"
}
const { img1, img2, img3 } = images

$(document).ready(function () {
    $("#img1").attr("src",img1)
    $("#img2").attr("src",img2)
    $("#img3").attr("src", img3)
    var inc = 0
    $("#btn1").attr("disabled",true)
    const moveright = () => {
        
        inc = inc - 800
        if (inc == -1600) {
            $("#btn2").attr("disabled",true)
        }
        console.log(inc)
        $(".carousel").css({"transform":"translateX("+inc+"px)"})
    }
    const moveleft = () => {
        
        inc = inc + 800
        if (inc == 0) {
            $("#btn1").attr("disabled",true)
        }
        console.log(inc)
        $(".carousel").css({"transform":"translateX("+inc+"px)"})
    }
    $("#btn2").click(function () {
        $("#btn1").attr("disabled",false)
        moveright()
    })
    $("#btn1").click(function () {
        $("#btn2").attr("disabled",false)
        moveleft()
    })
})




