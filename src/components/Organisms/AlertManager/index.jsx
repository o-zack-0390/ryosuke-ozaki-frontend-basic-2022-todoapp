import React, {useEffect} from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler"
import {Alert} from "../../Atoms/Alert/index"

export const AlertManager = () => {

    // Context を取得
    const AlertHandlerContext = useAlertHandlerContext();
    
    // アラートが表示されている場合は５秒待機してからアラートを非表示にする
    useEffect(() => {
        if(AlertHandlerContext.visible === true){
            setTimeout(() => {
                AlertHandlerContext.closeAlert(AlertHandlerContext.errorText);
            }, 5000);
        }
    })

    return (
        <Alert 
            isActive={AlertHandlerContext.visible}  // false の場合は非表示
            context={AlertHandlerContext.errorText}
        />
    )
}