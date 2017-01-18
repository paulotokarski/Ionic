import { Injectable } from '@angular/core';
import { HTTP } from 'ionic-native'

@Injectable()
export class ApiService {

	constructor () { }
	
	private usersUrl = 'https://jsonplaceholder.typicode.com/users';
	private userAlbumUrl = 'https://jsonplaceholder.typicode.com/albums?userId=';
	private userAlbumPhotoUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';

	getUsers(): any {
		return new Promise(resolve => {
			HTTP.get(this.usersUrl, {}, {})
				.then(res => {
					resolve(JSON.parse(res.data))
				}).catch(err => {
					console.log(err)
				})
		})
	}

	getUserAlbums(id: any): any {
		return new Promise(resolve => {
			HTTP.get(this.userAlbumUrl + id, {}, {})
				.then(res => {
					resolve(JSON.parse(res.data))
				}).catch(err => {
					console.log(err)
				})
		})
	}

	getUserAlbumPhotos(id: any): any {
		return new Promise(resolve => {
			HTTP.get(this.userAlbumPhotoUrl + id, {}, {})
				.then(res => {
					resolve(JSON.parse(res.data))
				}).catch(err => {
					console.log(err)
				})
		})
	}
}
