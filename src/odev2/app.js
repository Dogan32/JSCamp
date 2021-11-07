/*---1--- if Kullanımı ve Asal mı Değil mi ? */

function asalSayiTespit(...sayi){

    for (let i = 0; i < sayi.length; i++) {

        let sonuc = true;

        if(sayi[i] <= 0){
            console.log(sayi[i] + " " +"asal sayı değil")
            continue;
        }

        for (let j = 2; j < sayi[i]; j++) {
            if(sayi[i] % j == 0){
                sonuc = false
                break
            }
        }

        if(sonuc==true){
            console.log(sayi[i] + " " + "asal sayı")
        }
        else{
            console.log(sayi[i] + " " + "asal sayı değil")
        }
    }
}
asalSayiTespit(-6,0,1,2,3,4,5,6,77,99,101)
console.log("-----------------------------")

/*---2--- Arkadaş Sayılar */

function arkadasSayilar(sayi1,sayi2){
    let toplam1 = 0;
    let toplam2 = 0;

    for (let i = 0; i < sayi1; i++) {
       
        if(sayi1 % i == 0){
            toplam1 = toplam1 + i
        }   
    }

    for (let i = 0; i < sayi2; i++) {
       
        if(sayi2 % i == 0){
            toplam2 = toplam2 + i
        }   
    }

    if(toplam1 == sayi2 && toplam2 == sayi1){
        console.log(sayi1 + " ve " + sayi2 + " " + "arkadaş sayılardır")
    }
    
    else{
        console.log(sayi1 + " ve " + sayi2 + " " + "arkadaş sayılar değillerdir")
    }
}

arkadasSayilar(220,284)
console.log("-----------------------------")

/*---3--- Mükemmel Sayılar */

function mukemmelSayilar(sayi){
    let toplam = 0;

    for (let i = 1; i < sayi; i++) {
        for (let k = 1; k <= i; k++) {
            if(i % k == 0){
                toplam = toplam + k
            }             
        }
        if(toplam == 2*i){
            console.log(i + " " + "mükemmel sayıdır")
        }
        toplam=0       
    }
}

mukemmelSayilar(1000)
console.log("-----------------------------")

/*---4--- Asal Sayılar */

function asalSayilar(sayi){

    for (let i = 1; i < sayi; i++) {
        let sonuc = true;

        for (let j = 2; j < i; j++) {
            if(i % j == 0){
                sonuc = false
                break
            }
        }

        if(sonuc==true){
            console.log(i + " " + "asal sayıdır")
        }
    }    
}

asalSayilar(1000)
