import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Brandlist from "../../../../../common/brand";
import ColorSelect from "../../../../../common/ColorSelect";
import Processor from "../../../../../common/processor";
import RichTextEditor from "../../../../../RichTextEditor";
import {
  storage_size,
  storage_type,
  screen_size,
  os_version,
  graphics_memory,
  display_resolution_type,
  laptop_type,
} from "../../../../../data/laptop.json";
export const Pricecolormanagement = ({ parentCallback, state }) => {
  const [inputList, setInputList] = useState(
    state.ProductVariants.length > 0
      ? state.ProductVariants.map((item) => ({ ...item, readonly: true }))
      : [
          {
            id: null,
            longDesc: null,
            shortDesc: null,
            specification: null,
            productName: null,
            productCode: null,
            distributorPrice: null,
            buyerPrice: null,
            unitSize: null,
            qty: 1,
            colorId: null,
            thumbnail: null,
            galleryImg: null,
            youTubeUrl: null,
            stockType: false,
            refundable: true,
            qtyWarning: null,
            COD: null,
            networkType: null,
            modelYear: null,
            osType: null,
            memory: null,
            screenSize: null,
            batteryCapacity: null,
            primaryCamera: null,
            secondaryCamera: null,
            simCount: null,
            interface: null,
            compatibility: null,
            storageSize: null,
            storageType: null,
            displayResolutionType: null,
            laptopType: null,
            graphicsMemory: null,
            osVersion: null,
            internationalWarranty: null,
          },
        ]
  );

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    parentCallback(list);
  };
  const handleProcessorList = async (value, index) => {
    const list = [...inputList];
    list[index].processorId = value;
    setInputList(list);
  };
  const handleBrandList = async (value, index) => {
    const list = [...inputList];
    list[index].brandId = value;
    setInputList(list);
  };
  const handleColorList = async (value, index) => {
    const list = [...inputList];
    list[index].colorId = value;
    setInputList(list);
  };
  const handleContentChange = (contentHtml, index) => {
    const list = [...inputList];
    list[index].longDesc = contentHtml;
    setInputList(list);
  };
  const handleShortDesc = (contentHtml, index) => {
    const list = [...inputList];
    list[index].shortDesc = contentHtml;
    setInputList(list);
  };
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    parentCallback(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        longDesc: null,
        shortDesc: null,
        specification: null,
        productName: null,
        productCode: null,
        distributorPrice: null,
        buyerPrice: null,
        unitSize: null,
        qty: 1,
        colorId: null,
        thumbnail: null,
        galleryImg: null,
        youTubeUrl: null,
        stockType: false,
        refundable: true,
        qtyWarning: null,
        COD: true,
        networkType: null,
        modelYear: null,
        osType: null,
        memory: null,
        screenSize: null,
        batteryCapacity: null,
        primaryCamera: null,
        secondaryCamera: null,
        simCount: null,
        interface: null,
        compatibility: null,
        storageSize: null,
        storageType: null,
        displayResolutionType: null,
        laptopType: null,
        graphicsMemory: null,
        osVersion: null,
        internationalWarranty: null,
      },
    ]);
  };
  //end block
  const sub_category = sessionStorage.getItem("sub_category");
  return (
    <Grid>
      {/* <label>Product Price</label> */}
      {inputList.map((x, i) => {
        return (
          <Grid
            container
            spacing={2}
            style={
              i % 2
                ? { marginTop: "1rem", background: "rgb(195 232 191 / 25%)" }
                : { background: "#DAF7A6" }
            }
          >
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Product Name<span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                name="productName"
                placeholder="ex: Enter product name"
                value={x.productName}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Network Type<span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="networkType"
                value={x.networkType}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"5G"}>5G</option>
                <option value={"4G"}>4G</option>
                <option value={"3G"}>3G</option>
                <option value={"2G"}>2G</option>
                <option value={"wifi"}>Wifi</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "" : "d-none"}
            >
              <label className="form-label font-weight-bold">
                Processor Type<span className="text-danger">*</span>
              </label>
              <Processor onSelectProcessor={(e) => handleProcessorList(e, i)} />
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Model year<span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="modelYear"
                value={x.modelYear}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"2023"}>2023</option>
                <option value={"2022"}>2022</option>
                <option value={"2021"}>2021</option>
                <option value={"2020"}>2020</option>
                <option value={"2019"}>2019</option>
                <option value={"2018"}>2018</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "" : "d-none"}
            >
              <label className="form-label font-weight-bold">
                Storage Size <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="storageSize"
                value={x.storageSize}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                {storage_size.map((option) => (
                  <option key={option} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "" : "d-none"}
            >
              <label className="form-label font-weight-bold">
                Storage Type <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="storageType"
                value={x.storageType}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                {storage_type.map((option) => (
                  <option key={option} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Operating System<span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="osType"
                value={x.osType}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={1}>IOS</option>
                <option value={2}>Android</option>
                <option value={3}>Blackberry OS</option>
                <option value={4}>Windows</option>
                <option value={5}>MacOS</option>
                <option value={6}>DOS</option>
                <option value={7}>MacOS</option>
                <option value={8}>Chrome OS</option>
                <option value={9}>Ubuntu</option>
                <option value={10}>Linux</option>
                <option value={11}>Universal</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "" : "d-none"}
            >
              <label className="form-label font-weight-bold">
                Os Version <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="osVersion"
                value={x.osVersion}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                {os_version.map((option) => (
                  <option key={option} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "" : "d-none"}
            >
              <label className="form-label font-weight-bold">
                Graphics Memory <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="graphicsMemory"
                value={x.graphicsMemory}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                {graphics_memory.map((option) => (
                  <option key={option} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "" : "d-none"}
            >
              <label className="form-label font-weight-bold">
                Display Resolution <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="displayResolutionType"
                value={x.displayResolutionType}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                {display_resolution_type.map((option) => (
                  <option key={option} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "" : "d-none"}
            >
              <label className="form-label font-weight-bold">
                Laptop Type <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="laptopType"
                value={x.laptopType}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                {laptop_type.map((option) => (
                  <option key={option} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Internal Memory<span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="memory"
                value={x.memory}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={7}>1TB</option>
                <option value={6}>512 GB</option>
                <option value={5}>256 GB</option>
                <option value={4}>128 GB</option>
                <option value={3}>64 GB</option>
                <option value={2}>32 GB</option>
                <option value={1}>Upto 16 GB</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                International Version<span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="internationalWarranty"
                value={x.internationalWarranty}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={1}>UAE Version</option>
                <option value={2}>International Version</option>
                <option value={3}>KSA Version</option>
                <option value={4}>USA Version</option>
                <option value={5}>Physical Dual Sim Version</option>
              </select>
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Ram <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="unitSize"
                value={x.unitSize}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"32GB_More"}>32GB & More</option>
                <option value={"12GB"}>16 GB</option>
                <option value={"12GB"}>12 GB</option>
                <option value={"8GB"}>8 GB</option>
                <option value={"6GB"}>6 GB</option>
                <option value={"4GB"}>4 GB</option>
                <option value={"3GB"}>3 GB</option>
                <option value={"2GB"}>2 GB</option>
                <option value={"upto_1_GB"}>Upto 1 GB</option>
              </select>
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Screen Size <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="screenSize"
                value={x.screenSize}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                {screen_size.map((option) => (
                  <option key={option} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Battery Capacity <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="batteryCapacity"
                value={x.batteryCapacity}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={1}>Upto 1000 mAh</option>
                <option value={2}>1000 - 1999 mAh</option>
                <option value={3}>2000 - 2999 mAh</option>
                <option value={4}>3000 - 3999 mAh</option>
                <option value={5}>4000 - 4999 mAh</option>
                <option value={6}>5000 mAh & Above</option>
                <option value={7}>16 Hours</option>
                <option value={8}>14 Hours</option>
                <option value={9}>10 Hours</option>
                <option value={10}>8 Hours</option>
                <option value={11}>7 Hours</option>
                <option value={12}>6 Hours</option>
                <option value={13}>4 Hours</option>
                <option value={14}>3 Hours</option>
                <option value={15}>2 Hours</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Primary Camera <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="primaryCamera"
                value={x.primaryCamera}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"above_64_MP"}>64 MP & Above</option>
                <option value={"upto_48_64_MP"}>48 - 63.9 MP</option>
                <option value={"upto_24_48_MP"}>24 - 47.9 MP</option>
                <option value={"upto_20_24_MP"}>20 - 23.9 MP</option>
                <option value={"upto_16_20_MP"}>16 - 19.9 MP</option>
                <option value={"upto_12_16_MP"}>12 - 15.9 MP</option>
                <option value={"upto_12_MP"}>8 - 11.9 MP</option>
                <option value={"upto_8_MP"}>Upto 7.9 MP</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Secondary Camera <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="secondaryCamera"
                value={x.secondaryCamera}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"above_32_MP"}>32 MP & Above</option>
                <option value={"upto_16_32_MP"}>16 - 31.9 MP</option>
                <option value={"upto_12_16_MP"}>12 - 15.9 MP</option>
                <option value={"upto_8_12_MP"}>8 - 11.9 MP</option>
                <option value={"upto_5_8_MP"}>5 - 7.9 MP</option>
                <option value={"upto_5_MP"}>Upto 4.9 MP</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Sim Count <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="simCount"
                value={x.simCount}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"double"}>Dual Sim</option>
                <option value={"single"}>Single Sim</option>
                <option value={"triple"}>triple Sim</option>
                <option value={"no_sim_card"}>No Sim Card</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Interface <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="interface"
                value={x.interface}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"wifi_cellular"}>Wifi+Cellular</option>
                <option value={"bluetooth"}>Bluetooth/Wireless</option>
                <option value={"4g"}>4g</option>
                <option value={"wireless"}>Wireless</option>
                <option value={"wifi"}>Wifi</option>
                <option value={"type_C"}>USB Type C</option>
              </select>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              className={sub_category == 11 ? "d-none" : ""}
            >
              <label className="form-label font-weight-bold">
                Charger Compatibility <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                name="compatibility"
                value={x.compatibility}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"type_C"}>Type-C</option>
                <option value={"port"}>Lightning Port</option>
                <option value={"micro"}>Micro USB</option>
                <option value={"mini"}>Mini USB</option>
                <option value={"usb"}>Lightning to USB</option>
              </select>
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Stock Visibility*
              </label>
              <select
                className="form-control"
                name="stockType"
                value={x.stockType}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">Refundabe*</label>
              <select
                className="form-control"
                name="REFUNDABLE"
                value={x.REFUNDABLE}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <label className="form-label font-weight-bold">
                Brand<span className="text-danger">*</span>
              </label>
              <Brandlist onSelectBrand={(e) => handleBrandList(e, i)} />
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <label className="form-label font-weight-bold">Color*</label>
              <ColorSelect onSelectColor={(e) => handleColorList(e, i)} />
            </Grid>

            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Stock Quantity*
              </label>
              <input
                className="form-control"
                name="QTYWARNING"
                placeholder="ex: 100"
                value={x.QTYWARNING}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Cash On Delivery*
              </label>
              <select
                className="form-control"
                name="COD"
                value={x.COD}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option disabled selected>
                  Select type
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Price<span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                name="distributorPrice"
                placeholder="ex: 100"
                value={x.distributorPrice}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid>
            <Grid item md={3} lg={3}>
              <label className="form-label font-weight-bold">
                Your Selling Price <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                name="buyerPrice"
                placeholder="ex: 1"
                value={x.buyerPrice}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid>
            {/* <Grid item md={6} lg={6}>
              <label className="form-label font-weight-bold">
                YouTube Video Url*
              </label>
              <input
                className="form-control"
                name="youTubeUrl"
                placeholder="ex: https://youtu.be/nqWZV_OYVIk"
                value={x.youTubeUrl}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid> */}
            <Grid item md={6} lg={6}>
              <label className="form-label font-weight-bold">
                <b>Short Description*</b>
              </label>
              <RichTextEditor
                content={x.shortDesc}
                handleContentChange={(e) => handleShortDesc(e, i)}
                placeholder="insert text here..."
              />
            </Grid>
            <Grid item md={6} lg={6}>
              <label className="form-label font-weight-bold">
                Long Description*
              </label>
              <RichTextEditor
                content={x.longDesc}
                handleContentChange={(e) => handleContentChange(e, i)}
                placeholder="insert text here..."
              />
            </Grid>
            <Grid item md={12} lg={12}>
              <div className="btn-box" style={{ marginTop: "1rem" }}>
                {inputList.length !== 1 && (
                  <Button
                    variant="contained"
                    onClick={() => handleRemoveClick(i)}
                    style={{ marginRight: "1rem" }}
                  >
                    Remove
                  </Button>
                )}
                {inputList.length - 1 === i && (
                  <Button variant="contained" onClick={handleAddClick}>
                    Add
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Pricecolormanagement;
