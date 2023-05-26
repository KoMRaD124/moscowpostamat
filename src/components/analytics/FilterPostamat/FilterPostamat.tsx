import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import styles from "./FilterPostamat.module.scss"
import xMark from "../../../assets/img/Xmark.svg"
import searchIcon from "../../../assets/img/search.svg"
import {postamatStore} from "../../../mobxStore/postamatStore";
import classNames from "classnames";

export const FilterPostamat = observer((props: {
    onClose: () => void
}) => {
    useEffect(() => {
        postamatStore.fetchRegions()
        postamatStore.fetchDistricts()
    }, [])

    const isReady =
        postamatStore.regions &&
        postamatStore.districts

    const renderSelectRegion = () => {
        return (
            <div className={styles.selectDistrictGrid}>
                <div>
                    <div className={styles.colHeader}>Округ</div>
                    <div className={styles.groupsCol}>
                        {Object
                            .entries(postamatStore.groupByFirstLetter(postamatStore.regions))
                            .map(([key, value]: [string, any]) => (
                                <div className={styles.group}>
                                    <div className={styles.letter}>
                                        {key}
                                    </div>
                                    {value.map((region: any) =>
                                        <button
                                            className={styles.groupItem}
                                            onClick={() => postamatStore.toggleRegion(region.id)}
                                        >
                                            <div
                                                className={classNames(styles.checkbox, {
                                                    [styles.checked]: postamatStore.isRegionSelected(region.id)
                                                })}
                                            />
                                            <div className={classNames(styles.groupItemText, {
                                                [styles.checked]: postamatStore.isRegionSelected(region.id)
                                            })}>
                                                {region.name}
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>

                <div>
                    <div className={styles.colHeader}>Район</div>
                    <div className={styles.groupsColDistricts}>
                        {Object
                            .entries(postamatStore.groupByFirstLetter(postamatStore.filteredDistricts))
                            .map(([key, value]: [string, any]) => (
                                <div className={styles.group}>
                                    <div className={styles.letter}>
                                        {key}
                                    </div>
                                    {value.map((region: any) =>
                                        <button
                                            className={styles.groupItem}
                                            onClick={() => postamatStore.toggleRegion(region.id)}
                                        >
                                            <div
                                                className={classNames(styles.checkbox, {
                                                    [styles.checked]: postamatStore.isRegionSelected(region.id)
                                                })}
                                            />
                                            <div className={classNames(styles.groupItemText, {
                                                [styles.checked]: postamatStore.isRegionSelected(region.id)
                                            })}>
                                                {region.name}
                                            </div>
                                        </button>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.bg}>
            <div className={styles.layout}>
                <div className={styles.header}>
                    Настроить показ постаматов
                    <button className={styles.closeButton} onClick={() => props.onClose()}>
                        <img src={xMark}/>
                    </button>
                </div>
                <div className={styles.divider}/>
                <div className={styles.searchRow}>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} placeholder={"ул. Мосфильмовская, д. 8, Москва"}/>
                        <img src={searchIcon} className={styles.searchIcon}/>
                    </div>
                    <button
                        className={styles.selectAllButton}
                        onClick={() => postamatStore.selectAll()}
                    >
                        Выбрать все
                    </button>
                    <button
                        className={styles.clearSelectionButton}
                        onClick={() => postamatStore.clearSelection()}
                    >
                        Очистить выбор
                    </button>
                </div>
                {isReady && renderSelectRegion()}
            </div>
        </div>
    );
});

