const indexedDB=window.indexedDB;
const form=document.getElementById('frmcar');
const info2=document.getElementById('info2');
if(indexedDB && form){
    let db;
    const request=indexedDB.open('info',1)

    request.onsuccess=()=>{
        db=request.result;
        console.log('ABIERTA',db)
        readData();
    }
    request.onupgradeneeded=()=>{
        db=request.result;
        console.log('Create', db)
        const objectStore=db.createObjectStore('info2',{
            keyPath:"dui"
        }
        );

    }
    request.onerror=(error)=>{
        console.log('error gil', error);
    }
    const addData=(data)=>{
        const transaction = db.transaction(['info2'],'readwrite')
        const objectStore=transaction.objectStore('info2')
        const request = objectStore.add(data);
        readData();
    }
    const readData=()=>{
        const transaction = db.transaction(['info2'],'readonly')
        const objectStore=transaction.objectStore('info2')
        const request = objectStore.openCursor()
        const fragment=document.createDocumentFragment();
        request.onsuccess=(e)=>{
            
            const cursor=e.target.result;
            if(cursor){
                
                const nombre=document.createElement("Table")
                nombre.textContent=cursor.value.nombre;
                fragment.appendChild(nombre);


                const dui=document.createElement("Table")
                dui.textContent=cursor.value.dui;
                fragment.appendChild(dui);

                const nit=document.createElement("Table")
                nit.textContent=cursor.value.nit;
                fragment.appendChild(nit);

                const color=document.createElement("Table")
                color.textContent=cursor.value.color;
                fragment.appendChild(color);

                const marca2=document.createElement("Table")
                marca2.textContent=cursor.value.marca2;
                fragment.appendChild(marca2);

                const modelo=document.createElement("Table")
                modelo.textContent=cursor.value.modelo;
                fragment.appendChild(modelo);

                const anio=document.createElement("Table")
                anio.textContent=cursor.value.anio;
                fragment.appendChild(anio);

                const placa=document.createElement("Table")
                placa.textContent=cursor.value.placa;
                fragment.appendChild(placa);

                const falla=document.createElement("Table")
                falla.textContent=cursor.value.falla;
                fragment.appendChild(falla);
                cursor.continue();
            }else{
                most.textContent='';
               most.appendChild(fragment)
            }
        }
    }
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const data = {
            nombre: e.target.nameDueno.value,
            dui: e.target.duiDueno.value,
            nit: e.target.nitDueno.value,
            color: e.target.radcolor.value,
            marca2: e.target.selfab.value,
            modelo: e.target.selmod.value,
            anio: e.target.txtanio.value,
            placa: e.target.txtplaca.value,
            falla: e.target.txtfalla.value
        }
        addData(data);
    })
}