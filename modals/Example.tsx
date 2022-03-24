import {observer} from "mobx-react";
import { ModalsEnum } from ".";
import ModalContainer from "./ModalContainer";

interface modalProps {
    key:ModalsEnum,
    data?:any,
    idx:ModalsEnum
}

export const ExampleModal = observer(({key,data,idx}:modalProps) => {

    return (
        <ModalContainer heading={'Modal example'} modalKey={key} idx={idx}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum, maiores omnis deleniti provident tempore eos quo est, sequi aut vitae. Quibusdam possimus velit quis eius, autem quaerat? Non, dignissimos!</p>
        </ModalContainer>
    )
});

