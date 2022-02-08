//console.log('Poo');

class Ave {
    nombre;
    alas = 2; // todas las aves tienen 2 alas
    patas; // hay garras ,palmadas, 2, 3 y 4 dedos, 2 dedos hacia adelanta y 2 atras, para trepar
    plumas; // oscuras, claras pardas, de colores
    desplazamiento; // vuelan, corren, nadan 

    constructor( nombre = '', patas = '', plumas = '', desplazamiento ='') {
        this.nombre = nombre;
        this.alas = 2;
        this.patas = patas;
        this.plumas = plumas;
        this.desplazamiento = desplazamiento;
    }

}

const ave1 = new Ave('Águila', 'garras', 'oscuras', 'vuela');
console.log(ave1);