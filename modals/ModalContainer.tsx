import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { ModalStore } from '../stores/ModalStore';
import { useInjection } from 'inversify-react';
import styles from './Modal.module.sass';
import { ModalsEnum } from '.';

interface IModalProps {
    modalKey: ModalsEnum;
    onShow?: () => any;
    onHide?: () => any;
    closable?: boolean;
    idx: number;
}

interface P extends React.PropsWithChildren<IModalProps> {
    color?: 'yellow' | 'red' | 'green';
    heading: string;
}

const ModalContainer: React.FC<P> = observer(
    ({ modalKey, children, heading, onShow, onHide, idx, closable = true, }: P) => {
        const fade = useRef<HTMLDivElement>(null);

        const modalStore = useInjection(ModalStore);

        useEffect(() => {
            onShow?.();
            return () => onHide?.();
        }, []);

        

        return (
            <div
                className={styles.fade}
                ref={fade}
                onClick={(e) => e.target === fade.current && closable && modalStore.hideModal(idx)}
            >
                <div
                    className={classNames(styles.modal,)}
                >
                    <h2 className={styles.heading}>{heading}<span onClick={()=>modalStore.hideModal(idx)}>x</span></h2>
                    <div className={styles.children}>{children}</div>
                </div>
            </div>
        );
    },
);

export default ModalContainer;
