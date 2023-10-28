const config = {
  url: "https://api.recursionist.io/builder/computers?type=",
  body: document.getElementById("target"),
  cpu: {
    brand: "step1Select",
    model: "step1Model",
  },
  gpu: {
    brand: "step2Select",
    model: "step2Model",
  },
  ram: {
    num: "step3",
    brand: "step3Brand",
    model: "step3Model",
  },
  storage: {
    type: "step4",
    size: "step4Storage",
    brand: "step4Brand",
    model: "step4Model",
  },
};

class PC {
  constructor() {
    this.pcNumber = 0;
    this.cpuModel = null;
    this.cpuBrand = null;
    this.cpuBenchMark = null;
    this.gpuBrand = null;
    this.gpuModel = null;
    this.gpuBenchMark = null;
    this.ramBrand = null;
    this.ramModel = null;
    this.ramBenchMark = null;
    this.storageType = null;
    this.storageSize = null;
    this.storageBrand = null;
    this.storageModel = null;
    this.storageBenchMark = null;
    this.gamingScore = null;
    this.workScore = null;
  }

  static getBrandData(partName, brand, pc) {
    switch (partName) {
      case "cpu":
        pc.cpuBrand = brand;
        break;
      case "gpu":
        pc.gpuBrand = brand;
        break;
      case "ram":
        pc.ramBrand = brand;
        break;
      case "ssd":
        pc.storageBrand = brand;
        break;
      case "hdd":
        pc.storageBrand = brand;
        break;
    }
  }

  static getModelData(partName, model, pc) {
    switch (partName) {
      case "cpu":
        pc.cpuModel = model;
        break;
      case "gpu":
        pc.gpuModel = model;
        break;
      case "ram":
        pc.ramModel = model;
        break;
      case "ssd":
        pc.storageModel = model;
        break;
      case "hdd":
        pc.storageModel = model;
        break;
    }
  }

  static getBenchMarkData(partName, benchMark, pc) {
    switch (partName) {
      case "cpu":
        pc.cpuBenchMark = benchMark;
        break;
      case "gpu":
        pc.gpuBenchMark = benchMark;
        break;
      case "ram":
        pc.ramBenchMark = benchMark;
        break;
      case "ssd":
        pc.storageBenchMark = benchMark;
        break;
      case "hdd":
        pc.storageBenchMark = benchMark;
        break;
    }
  }

  static getStorageSize(storageSize, pc) {
    pc.storageSize = storageSize;
  }
  static getStorageType(storageType, pc) {
    pc.storageType = storageType;
  }
}

class View {
  static initView() {
    config.body.innerHTML = `<header class="mainHeader bg-dark">
        <h1 class="text-center text-white">Build Your Own Computer</h1>
      </header>
      <!-- main -->
      <main>
        <!-- step1 -->
        <div class="step1 m-2">
          <h2 class="mb-3">step1: Select Your CPU</h2>
          <div class="d-flex">
            <p>Brand</p>
            <select class="custom-select" id="step1Select">
              <option selected value="-">-</option>
            </select>
            <p>Model</p>
            <select class="custom-select" id="step1Model">
              <option selected>-</option>
            </select>
          </div>
        </div>
        <!-- step2 -->
        <div class="step2 m-2">
          <h2 class="mb-3">step2: Select Your GPU</h2>
          <div class="d-flex">
            <p>Brand</p>
            <select class="custom-select" id="step2Select">
              <option selected>-</option>
            </select>
            <p>Model</p>
            <select class="custom-select" id="step2Model">
              <option selected>-</option>
            </select>
          </div>
        </div>
        <!-- step3 -->
        <div class="step3 m-2">
          <h2 class="mb-3">step3: Select Your Memory Card</h2>
          <p>How many?</p>
          <div class="d-flex">
            <p>How many</p>
            <select class="custom-select" id="step3">
              <option selected>-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <p>Brand</p>
            <select class="custom-select" id="step3Brand">
              <option selected>-</option>
            </select>
            <p>Model</p>
            <select class="custom-select" id="step3Model">
              <option selected>-</option>
            </select>
          </div>
        </div>
        <!-- step4 -->
        <div class="step4 m-2">
          <h2 class="mb-3">step4: Select Your Storage</h2>
          <div class="d-flex">
            <p>HDD or SSD</p>
            <select class="custom-select" id="step4">
              <option selected>-</option>
              <option value="HDD">HDD</option>
              <option value="SSD">SSD</option>
            </select>
            <p>Storage</p>
            <select class="custom-select" id="step4Storage">
              <option selected>-</option>
            </select>
            <p>Brand</p>
            <select class="custom-select" id="step4Brand">
              <option selected>-</option>
            </select>
            <p>Model</p>
            <select class="custom-select" id="step4Model">
              <option selected>-</option>
            </select>
          </div>
        </div>
        <!-- button -->
        <button type="submit" class="btn btn-primary ml-3 mb-3" id="btn">Add PC</button>
      </main>
      <!-- result -->
      <div class="result bg-primary" id="result">
      </div>`;
  }

  static createResultView(pc) {
    pc.pcNumber += 1;
    let count = pc.pcNumber;
    let result = document.getElementById("result");
    result.innerHTML += `
  <header class="resultHeader text-white text-center">Your PC${count}</header>
      <main class="m-3">
        <div class="CPU">
          <h2 class="text-white">CPU</h2>
          <p class="text-white">Brand:  ${pc.cpuBrand}<br />Model: ${pc.cpuModel}</p>
        </div>
        <div class="GPU">
          <h2 class="text-white">GPU</h2>
          <p class="text-white">Brand:  ${pc.gpuBrand}<br />Model:  ${pc.gpuModel}</p>
        </div>
        <div class="RAM">
          <h2 class="text-white">RAM</h2>
          <p class="text-white">Brand:  ${pc.ramBrand}<br />Model:  ${pc.ramModel}</p>
        </div>
        <div class="Storage">
          <h2 class="text-white">Storage</h2>
          <p class="text-white">
            Disk:${pc.storageType}<br />Storage:  ${pc.storageSize}<br />Brand:  ${pc.storageBrand}<br />Model:  ${pc.storageModel}
          </p>
        </div>
      </main>
      <div class="resultFooter container d-flex justify-content-between align-items-center">
        <p class="text-white">Gaming: ${pc.gamingScore}%</p>
        <p class="text-white">Work: ${pc.workScore}%</p>
      </div>`;
  }
}

class controller {
  static startGame() {
    const pc = new PC(arguments);
    View.initView();
    controller.getAllScore(pc);
    document.getElementById("btn").addEventListener("click", () => {
      controller.getResultScore(pc);
    });
  }
  static getAllScore(pc) {
    let cpuBrandSelect = document.getElementById(config.cpu.brand);
    let gpuBrandSelect = document.getElementById(config.gpu.brand);
    let cpuModelSelect = document.getElementById(config.cpu.model);
    let gpuModelSelect = document.getElementById(config.gpu.model);
    let ramNumSelect = document.getElementById(config.ram.num);
    let storageType = document.getElementById(config.storage.type);
    this.getBrandData("cpu", cpuBrandSelect, cpuModelSelect, pc);
    this.getBrandData("gpu", gpuBrandSelect, gpuModelSelect, pc);
    this.getRamData("ram", ramNumSelect, pc);
    this.getStorageData(storageType, pc);
  }

  static getBrandData(partName, brandOption, modelOption, pc) {
    fetch(config.url + partName)
      .then((response) => response.json())
      .then((data) => {
        let brandData = this.getBrand(data);
        this.createOption(brandData, brandOption);
        brandOption.addEventListener("change", () => {
          this.getModelData(
            data,
            modelOption,
            brandOption[brandOption.selectedIndex].value,
            partName,
            pc
          );
        });
      });
  }

  static getBrand(data) {
    let brandData = {};
    for (const key in data) {
      if (brandData[data[key]["Brand"]] === undefined) {
        brandData[data[key]["Brand"]] = data[key]["Brand"];
      }
    }
    return brandData;
  }

  static getModelData(data, option, brand, partName, pc) {
    PC.getBrandData(partName, brand,pc);
    if (partName === "ram") {
      let ramList = controller.getRam(data);
      let numList = document.getElementById(config.ram.num).selectedIndex + "x";
      for (const key in ramList) {
        if (ramList[key] === brand && key.includes(numList)) {
          option.innerHTML += `<option value="${key}">${key}</option>`;
        }
      }
    } else if (partName === "ssd" || partName === "hdd") {
      let StorageSize = document.getElementById(config.storage.size);
      let Storage = StorageSize[StorageSize.selectedIndex].value;
      for (const key in data) {
        if (
          data[key]["Brand"] === brand &&
          data[key]["Model"].includes(Storage)
        ) {
          option.innerHTML += `<option value="${data[key]["Model"]}">${data[key]["Model"]}</option>`;
        }
      }
    } else {
      for (const key in data) {
        if (data[key]["Brand"] === brand) {
          option.innerHTML += `<option value="${data[key]["Model"]}">${data[key]["Model"]}</option>`;
        }
      }
    }
    option.addEventListener("change", (e) => {
      PC.getModelData(partName, e.target.value,pc);
      this.getBenchMark(data, partName, e.target.value, brand, pc);
    });
  }

  static getModel(data) {
    let brandData = {};
    for (const key in data) {
      if (brandData[data[key]["Model"]] === undefined) {
        brandData[data[key]["Model"]] = data[key]["Model"];
      }
    }
    return brandData;
  }

  static getRamData(partName, numSelect, pc) {
    let ramBrand = document.getElementById(config.ram.brand);
    let ramModel = document.getElementById(config.ram.model);
    numSelect.addEventListener("change", (e) => {
      this.getBrandData(partName, ramBrand, ramModel, pc);
    });
  }

  static getRam(data) {
    let RamData = {};
    for (const key in data) {
      if (RamData[data[key]["Model"]] === undefined) {
        RamData[data[key]["Model"]] = data[key]["Brand"];
      }
    }
    return RamData;
  }

  static createOption(data, targetEle) {
    targetEle.innerHTML = `<option selected>-</option>`;
    for (const key in data) {
      targetEle.innerHTML += `<option value="${data[key]}">${data[key]}</option>`;
    }
  }

  static getStorageData(storageType, pc) {
    let storageBrand = document.getElementById(config.storage.brand);
    let storageModel = document.getElementById(config.storage.model);
    storageType.addEventListener("change", (e) => {
      this.getStorage(e.target.value, storageBrand, storageModel, pc);
    });
  }

  static getStorage(partName, brand, model, pc) {
    let storageSize = document.getElementById(config.storage.size);
    let part = partName.toLowerCase();
    console.log(part)
    PC.getStorageType(partName,pc);
    fetch(config.url + part)
      .then((response) => response.json())
      .then((data) => {
        let storageSizeList = this.getStorageSize(data);
        this.createOption(storageSizeList, storageSize);
      });
    storageSize.addEventListener("change", (e) => {
      PC.getStorageSize(e.target.value,pc);
      this.getBrandData(part, brand, model, pc);
    });
  }

  static getStorageSize(data) {
    let sizeList = [];
    for (const key in data) {
      sizeList.push(
        data[key]["Model"]
          .split(" ")
          .filter((model) => model.includes("GB") || model.includes("TB"))
          .join("")
      );
    }
    let storageSize = Array.from(new Set(sizeList));
    return storageSize;
  }
  static getBenchMark(data, partName, model, brand, pc) {
    for (const key in data) {
      if (data[key]["Brand"] === brand && data[key]["Model"] === model) {
        PC.getBenchMarkData(partName, data[key]["Benchmark"],pc);
      }
    }
  }

  static getResultScore(pc) {
    let storageScore =pc.storageType === "SSD"? parseInt(pc.storageBenchMark * 0.05): parseInt(pc.storageBenchMark * 0.025);
    pc.gamingScore =
      parseInt(
        pc.cpuBenchMark * 0.25 + pc.gpuBenchMark * 0.6 + pc.ramBenchMark * 0.125
      ) + storageScore;
    pc.workScore = parseInt(
      pc.cpuBenchMark * 0.6 +
        pc.gpuBenchMark * 0.25 +
        pc.ramBenchMark * 0.1 +
        storageScore
    );
    View.createResultView(pc);
  }
}

controller.startGame();
