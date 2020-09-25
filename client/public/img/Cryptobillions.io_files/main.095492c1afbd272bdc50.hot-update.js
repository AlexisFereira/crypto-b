webpackHotUpdate("main",{

/***/ "./src/components/login/Registerform.js":
/*!**********************************************!*\
  !*** ./src/components/login/Registerform.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../UI/Btn */ "./src/components/UI/Btn/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _UI_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../UI/field */ "./src/components/UI/field/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_actions_actionsCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/actionsCreators */ "./src/components/store/actions/actionsCreators.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/components/login/styles.js");
/* harmony import */ var _getWeb3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../getWeb3 */ "./src/getWeb3.js");
/* harmony import */ var _contracts_Cryptobillions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contracts/Cryptobillions */ "./src/contracts/Cryptobillions.json");
var _contracts_Cryptobillions__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../contracts/Cryptobillions */ "./src/contracts/Cryptobillions.json", 1);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../crypto */ "./src/crypto.js");
/* harmony import */ var _UI_ShowModal_ShowModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UI/ShowModal/ShowModal */ "./src/components/UI/ShowModal/ShowModal.js");
/* harmony import */ var _UI_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../UI/Fade */ "./src/components/UI/Fade/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
var _jsxFileName = "/Users/epayco/Desktop/Sitios/crypto-b/client/src/components/login/Registerform.js";
















function RegisterForm(props) {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
  const [state, SetS] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    error: false,
    address: "",
    loading: false,
    web3: {},
    disabled: false
  });
  const [modal, SetM] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    status: false,
    title: "",
    description: "",
    callBack: null,
    icon: ""
  });

  let hanldeModal = x => SetM({ ...modal,
    ...x
  });

  const handleState = x => SetS({ ...state,
    ...x
  });

  let onSubmit = async () => {
    SetS({ ...state,
      loading: true
    });

    if (state.address === "") {
      handleState({
        disabled: true,
        error: true
      });
      return "";
    }

    try {
      const web3 = await Object(_getWeb3__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Use web3 to get the user's accounts.

      const accounts = await web3.eth.getAccounts(); // Get the contract instance.
      // const networkId       = await web3.eth.net.getId();
      // const deployedNetwork = Cryptobillions.networks[networkId];
      // const instance        = new web3.eth.Contract( Cryptobillions.abi, deployedNetwork && deployedNetwork.address);

      const instance = new web3.eth.Contract(_contracts_Cryptobillions__WEBPACK_IMPORTED_MODULE_9__.abi, _config__WEBPACK_IMPORTED_MODULE_14__["cryptoVar"].contractAddress);
      const nonce = await web3.eth.getTransactionCount(accounts[0]);
      let gasPrice = await axios__WEBPACK_IMPORTED_MODULE_13___default()({
        method: "get",
        url: "https://ethgasstation.info/json/ethgasAPI.json"
      }).then(result => result.data.average / 10);
      gasPrice = await web3.utils.toWei(gasPrice.toString(), "gwei");

      let optionSend = gas => ({
        nonce,
        gasPrice,
        gas,
        from: accounts[0],
        to: _config__WEBPACK_IMPORTED_MODULE_14__["cryptoVar"].contractAddress,
        // la direccion del contrato
        value: web3.utils.toWei("0.09", "ether"),
        data: web3.eth.abi.encodeFunctionSignature('whitdrawETH()')
      });

      let optionGas = {
        nonce,
        from: accounts[0],
        to: _config__WEBPACK_IMPORTED_MODULE_14__["cryptoVar"].contractAddress,
        // la direccion del contrato
        value: web3.utils.toWei("0.09", "ether"),
        data: web3.eth.abi.encodeFunctionSignature('whitdrawETH()')
      }; // // return await instance.methods;
      // let options = {
      //     nonce,
      //     gasPrice:web3.utils.toWei("50", "gwei"),
      //     gas:2000000,
      //     from: accounts[0],
      //     to:cryptoVar.contractAddress, // la direccion del contrato
      //     value: web3.utils.toWei("0.09", "ether"),
      //     data: web3.eth.abi.encodeFunctionSignature('whitdrawETH()')
      // };

      let userToRegister = await instance.methods.users(accounts[0]).call();

      if (userToRegister.id !== "0") {
        handleState({
          loading: false
        });
        return props.history.push("/dashboard/?user=" + userToRegister.id);
      } // valida si es un id o un add


      if (state.address.length < 18 && instance) {
        try {
          let x = await instance.methods.idToAddress(state.address).call();
          let referido = await instance.methods.users(x).call();

          if (userToRegister.id === "0") {
            // consulta le id
            await Object(_crypto__WEBPACK_IMPORTED_MODULE_10__["VerificaId"])(Number(referido.id)).then(async () => {
              try {
                let gasStimate = await instance.methods.registrationExt(x).estimateGas(optionGas);
                let r = await instance.methods.registrationExt(x).send(optionSend(gasStimate));
                axios__WEBPACK_IMPORTED_MODULE_13___default()({
                  url: `${_config__WEBPACK_IMPORTED_MODULE_14__["cryptoVar"].api}/api/v1/account/registrationExt`,
                  method: "post",
                  contentType: "application/json",
                  data: {
                    wallet: accounts[0],
                    referrer: x
                  }
                }).then(async result => {
                  console.log(result, "respondio el api de registor de usuario.");
                  handleState({
                    loading: false
                  });
                  props.SeTDataDash({
                    userId: r.events.Registration.returnValues.userId,
                    minihash: result.data.minihash
                  });
                  props.history.push("/dashboard/?user=" + r.events.Registration.returnValues.userId);
                }).catch(e => {
                  handleState({
                    loading: false
                  });
                  console.log(e, "No se registró el usuario en el api.");
                });
              } catch (e) {
                handleState({
                  loading: false,
                  error: true
                });
                hanldeModal({
                  status: true,
                  title: t("transaction_reject"),
                  description: "",
                  icon: "cancel"
                });
                console.log(e, "Hubo un error haciendo el registro.");
              }
            }).catch(() => {
              console.log("El referido no está registrado.");
              SetS({ ...state,
                loadingAuth: false
              });
              hanldeModal({
                status: true,
                title: t("address_not_found"),
                description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 49
                  }
                }, "La direcci\xF3n de wallet ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 78
                  }
                }, accounts[0].substring(0, 22) + "..."), " no se encuentra registrada."),
                icon: "cancel"
              });
              console.log("El referido no está registrado.");
            });
          } else {
            handleState({
              loading: false,
              error: true
            });
            hanldeModal({
              status: true,
              title: t("address_not_found"),
              description: "",
              icon: "cancel"
            });
            console.log("la cuenta que intenta registrar, ya está registrada.");
          }
        } catch (e) {
          handleState({
            loading: false,
            error: true
          });
          hanldeModal({
            status: true,
            title: t("address_not_found"),
            description: "",
            icon: "cancel"
          });
        }
      } // consulta normal si es un address
      else {
          try {
            let gasStimate = await instance.methods.registrationExt(state.address).estimateGas(optionGas);
            let r = await instance.methods.registrationExt(state.address).send(optionSend(optionSend(gasStimate)));
            axios__WEBPACK_IMPORTED_MODULE_13___default()({
              url: `${_config__WEBPACK_IMPORTED_MODULE_14__["cryptoVar"].api}/api/v1/account/registrationExt`,
              method: "post",
              contentType: "application/json",
              data: {
                wallet: accounts[0],
                referred: state.address
              }
            }).then(async result => {
              console.log(result, "respondio el api de registor de usuario.");
              handleState({
                loading: false
              });
              props.SeTDataDash({
                userId: r.events.Registration.returnValues.userId,
                minihash: result.data.minihash
              });
              props.history.push("/dashboard/?user=" + r.events.Registration.returnValues.userId);
            }).catch(e => {
              handleState({
                loading: false
              });
              console.log(e, "No se registró el usuario en el api.");
            });
          } catch (e) {
            alert("la dirección de la billetera no existe.");
            handleState({
              loading: false,
              error: true
            });
          }
        } // console.log(options)

    } catch (e) {
      console.log(e);
    }
  };

  const handleAddres = e => {
    let {
      value
    } = e.target;

    if (value !== "" && state.error) {
      handleState({
        error: false,
        address: value,
        disabled: false
      });
    } else {
      SetS({ ...state,
        address: value
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Fade__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["ContainerFom"], {
    className: "p-2 p-lg-4 br-8 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title text-center mb-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 16
    }
  }, t('register')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "text-center p-3",
    onSubmit: e => {
      e.preventDefault();
      onSubmit();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: t('Enter_ETH'),
    className: "mb-3",
    error: state.error,
    value: state.address,
    onChange: e => {
      let value = e.target.value.replace(/[^0-9a-zA-Z]/g, "").substring(0, 24);
      let obj = {
        target: {
          value
        }
      };
      handleAddres(obj);
    },
    disabled: state.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 20
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: state.loading,
    mw: "250px",
    className: "mx-auto",
    disabled: state.disabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 20
    }
  }, t('register'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_ShowModal_ShowModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: modal.status,
    onConfirm: () => hanldeModal({
      status: false
    }),
    icon: modal.icon,
    title: modal.title,
    description: modal.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 16
    }
  })));
}

const MSTprops = state => ({
  state: state.Dashboard
});

const MDTprops = {
  SeTDataDash: _store_actions_actionsCreators__WEBPACK_IMPORTED_MODULE_6__["SeTDataDash"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(MSTprops, MDTprops)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(RegisterForm))));

/***/ })

})
//# sourceMappingURL=main.095492c1afbd272bdc50.hot-update.js.map