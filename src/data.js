import axios from "axios";
import Configuration from "./configuration";
import Common from "./common";
import _ from "lodash";

export const getData = {
    getDataGraphQl(query) {
        return axios
            .post(Configuration.url_graphQl, { query: query })
            .then(res => {
                return res.data.data;
            });
    },
};

export const postData = {
    sendCommand(domain, commandName, body) {
        const dataSend = {
            CommandName: commandName,
            Domain: domain,
            Content: JSON.stringify(body),
            TimeOutSecond: 7
        };

        const api_url = Configuration.url_api + "/Command/SendSync";
        return axios.post(api_url, dataSend);
    },
    // postCustomer: function(commandName, body) {
    //     if (commandName === "CreateCustomer") {
    //         return postData.sendCommand("User", commandName, {
    //             Id: body.id,
    //             MerchantId: Common.getCookie("merchantId"),
    //             Name: body.name,
    //             Password: body.password,
    //             Email: body.email,
    //             Mobile: body.mobile,
    //             AllType: body.type,
    //             Categories: body.categories,
    //             Images: body.images,
    //             CreatedDate: Common.formatDateTime(new Date()),
    //             CreatedBy: Common.getCookie("userId")
    //         });
    //     }
    //     return postData.sendCommand("User", commandName, {
    //         Id: body.id,
    //         MerchantId: Common.getCookie("merchantId"),
    //         Name: body.name,
    //         Email: body.email,
    //         Mobile: body.mobile,
    //         AllType: body.type,
    //         Categories: body.categories,
    //         Images: body.images,
    //         CreatedDate: Common.formatDateTime(new Date()),
    //         CreatedBy: Common.getCookie("userId")
    //     });
    // },
    // changePasswordUser: function(id, oldPassword, newPassword) {
    //     return postData.sendCommand("User", "ChangePasswordUser", {
    //         Id: id,
    //         OldPassword: oldPassword,
    //         Password: newPassword,
    //         ModifiedBy: Common.getCookie("userId"),
    //         ModifiedDate: Common.formatDateTime(new Date())
    //     });
    // },
    // recoveryPassword: function(uid) {
    //     return postData.sendCommand("User", "RecoveryPassword", {
    //         Id: uid,
    //         ModifiedBy: Common.getCookie("userId"),
    //         ModifiedDate: Common.formatDateTime(new Date())
    //     });
    // },
    // recoveryPasswordByEmail: function(email) {
    //     return postData.sendCommand("User", "RecoveryPasswordByEmail", {
    //         Id: Common.guid(),
    //         Email: email,
    //         Domain: window.location.host,
    //         ModifiedBy: Common.GUID_EMPTY,
    //         ModifiedDate: Common.formatDateTime(new Date())
    //     });
    // },
    // checkEmailExist: async function(
    //     email,
    //     isFocussingEmailField,
    //     defaultEmail
    // ) {
    //     if (email === defaultEmail) return true;
    //     if (isFocussingEmailField) return true;
    //     const dataSend = {
    //         Field: "email",
    //         Value: email,
    //         MerchantId: Common.getCookie("merchantId")
    //     };

    //     const api_url = Configuration.url_api + "/User/CheckUserExist";
    //     const data = await axios.post(api_url, dataSend);
    //     return !data.data.Success;
    // }
};
