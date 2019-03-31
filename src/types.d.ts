import { List, Map } from "immutable";

declare module "pixabay.json" {
	const _: PixaBayData.IResponse;
	export default _;
}

export module PixaBayData {
	export interface IResponse {
		totalHits: number;
		hits: Array<IImageData>;
		total: number;
	}

	export type IImmutableResponse = ImmutableMap<IImmutableResponseData>;

	export interface IImmutableResponseData {
		totalHits: number;
		hits: List<ImmutableMap<IImageData>>;
		total: number;
	}

	export interface IImageData {
		largeImageURL: string;
		webformatHeight: number;
		webformatWidth: number;
		likes: number;
		imageWidth: number;
		id: number;
		user_id: number;
		views: number;
		comments: number;
		pageURL: string;
		imageHeight: number;
		webformatURL: string;
		type: string;
		previewHeight: number;
		tags: string;
		downloads: number;
		user: string;
		favorites: number;
		imageSize: number;
		previewWidth: number;
		userImageURL: string;
		previewURL: string;
	}
}

export interface ImmutableMap<T> extends Map<string, any> {
	get<K extends keyof T>(name: K): T[K];
}
