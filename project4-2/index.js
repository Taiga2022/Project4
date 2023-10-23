const config={
    url: "https://api.recursionist.io/builder/computers?type=",
    body:document.getElementById("target"),
    cpuBrand:document.getElementById("step1Select"),
    cpuModel: document.getElementById("step1Model"),
    gpuBrand: document.getElementById("step2Select"),
    gpuModel: document.getElementById("step2Model"),
    ramSize: document.getElementById("step3"),
    ramBrand: document.getElementById("step3Brand"),
    ramModel: document.getElementById("step3Model"),
    storageType: document.getElementById("step4"),
    storageSize: document.getElementById("step4Storage"),
    storageBrand: document.getElementById("step4Brand"),
    storageModel: document.getElementById("step4Model"),
    button: document.getElementById("btn"),
}


class PC{
    constructor(){
        this.cpuBrand=null,
        this.cpuModel=null,
        this.cpuBenchMark=null,
        this.gpuBrand=null,
        this.gpuModel=null,
        this.gpuBenchMark=null,
        this.ramBrand=null,
        this.ramModel=null,
        this.ramBenchMark=null,
        this.storageType=null,
        this.storageSize=null,
        this.storageBrand=null,
        this.storageModel=null,
        this.storageBenchMark=null,
    }

    static getBrandData(partName){
        switch (partName) {
            case "cpu":
                this.cpuBrand=config.cpuBrand[config.cpuBrand.selectedIndex].value
                break;
            case "gpu":
                this.gpuBrand=config.gpuBrand[config.gpuBrand.selectedIndex].value
                break;
            case "ram":
                this.ramBrand=config.ramBrand[config.ramBrand.selectedIndex].value
                break;
            case "ssd":
                this.storageBrand=config.storageBrand[config.storageBrand.selectedIndex].value
                break;
            case "hdd":
                this.storageBrand=config.storageBrand[config.storageBrand.selectedIndex].value
                break;
        }
    }

    static getModelData(){

    }

    static getBenchMarkData(){

    }

    static getStorageSize(){

    }

}

class View{
    static initView(){

    }

    static createResultView(){

    }
}

class controller{

}