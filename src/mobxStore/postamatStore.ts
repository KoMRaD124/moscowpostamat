import {makeAutoObservable} from "mobx";
import axios from "axios";
import {domain} from "../constants/config";

class PostamatStore {
    constructor() {
        makeAutoObservable(this)
    }

    regions?: {
        id: number,
        name: string
    }[]

    districts?: {
        id: number,
        name: string,
        region_id: number
    }[]

    selectedRegionIds: number[] = []

    clearSelection() {
        this.selectedRegionIds = []
    }

    selectAll() {
        this.selectedRegionIds = this.regions?.map(r => r.id) ?? []
    }

    isRegionSelected(id: number) {
        return this.selectedRegionIds?.includes(id)
    }

    toggleRegion(id: number) {
        if (this.isRegionSelected(id)) {
            this.selectedRegionIds = this.selectedRegionIds?.filter(_id => _id !== id)
        } else {
            this.selectedRegionIds?.push(id)
        }
    }

    groupByFirstLetter(array: any) {
        const unordered = array?.reduce((acc: any, region: any) => {
            const letter = region.name.charAt(0)
            const keyStore = (
                acc[letter] ||     // Does it exist in the object?
                (acc[letter] = []) // If not, create it as an empty array
            );
            keyStore.push(region)

            return acc
        }, {})

        return Object.keys(unordered).sort().reduce(
            (obj: any, key) => {
                obj[key] = unordered[key];
                return obj;
            },
            {}
        );
    }

    get filteredDistricts() {
        if (this.selectedRegionIds.length) {
            return this.districts?.filter(d => this.selectedRegionIds.includes(d.region_id))
        }
        return this.districts
    }

    async fetchRegions() {
        const res = await axios.get(`${domain}/api/admin/regions`)
        this.regions = res.data
    }

    async fetchDistricts() {
        const res = await axios.get(`${domain}/api/admin/districts`)
        this.districts = res.data
    }
}

export const postamatStore = new PostamatStore()
