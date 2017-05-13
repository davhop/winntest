class Transport {
	
	constructor(id,title,coordinates_from_lat,coordinates_from_lon,coordinates_to_lat,coordinates_to_lon,vehicule,comment){
            var dep = Transport.position(coordinates_from_lat,coordinates_from_lon);
            var arr = Transport.position(coordinates_to_lat,coordinates_to_lon);           
                this._id = id;
		this._title = title;
		this._coordinates_from_lat = coordinates_from_lat;
		this._coordinates_from_lon = coordinates_from_lon;
                this._coordinates_to_lat = coordinates_to_lat;
                this._coordinates_to_lon = coordinates_to_lon;
		this._vehicule = vehicule;
		this._comment = comment;
                this._addressDepart = dep.place_id;
                this._departNom = dep.formatted_address;
                this._addressArrivee = arr.place_id;
                this._arrivNom = arr.formatted_address;
                this._map = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyAH7gbryCvy7UyxcJUFZ47rBfXQVc4O_Bk&mode='+ Transport.vehicle(this._vehicule)+'&origin=place_id:' + this._addressDepart + '&destination=place_id:' + this._addressArrivee;
	}
        /**
         * accesseurs
         */
        get id(){
            return this._id;
        }
        set id(i){
            this._id = i;
        }
	get title(){
		return this.title;
	}
	
	set title(t){
		this._title = t;
	}
	get coordinatesFromLat(){
		return this._coordinates_from_lat;
	}
	
	set coordinatesFromLat(cfla){
		this._coordinates_from_lat = cfla;
	}
        get coordinatesFromLon(){
		return this._coordinates_from_lon;
	}
	
	set coordinatesFromLon(cflo){
		this._coordinates_from_lon = cflo;
	}
	get coordinatesToLat(){
		return this._coordinates_to_lat;
	}
	
	set coordinatesToLat(ctla){
		this._coordinates_to_lat = ctla;
	}
        get coordinatesToLon(){
		return this._coordinates_to_lon;
	}
	
	set coordToLon(ctlo){
		this._coordinates_to_lon = ctlo;
	}
	get vehicule(){
		return this._vehicule;
	}
	
	set vehicule(v){
		this._vehicule = v;
	}
	get comment(){
		return this._comment;
	}
	
	set comment(com){
		this._comment = com;
	}
        get addressDepart(){
                return this._addressDepart;
        }
        set addressDepart(ad){
                this._addressDepart = ad;
        }
        get departNom(){
                return this._departNom;
        }
        set departNom(dn){
                this._departNom = dn;
        }
        get addressArrivee(){
                return this._addressArrivee;
        }
        set addressArrivee(aa){
                this._addressArrivee = aa;
        }
        get arrNom(){
                return this._arrNom;
        }
        set arrNom(an){
                this._arrNom = an;
        }
        get map(){
            return this._map;
        }
        
         remove(){
            //
        }
        
    
    static vehicle(vehicule){
         var res = '';
        switch(vehicule){
            case 'car':
                res = 'driving';
                break;
            case 'bike':
                res = 'bicycling';
                break;
            case 'foot':
                res = 'walking';
        }
        return res;
    }
    /**
     * Récupère les fichiers json google maps correspondant aux positions
     * @param {Number } lat
     * @param {Number } lon
     * @param {Number } lat1
     * @param {Number } lon1
     * @returns  json google maps 
     */
    static findAddresses(lat,lon,lat1,lon1){
            var request = require('request');
            var fs = require('fs');

            request('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=AIzaSyAH7gbryCvy7UyxcJUFZ47rBfXQVc4O_Bk&result_type=locality', function (error, response, body, next) { 
                if (!fs.existsSync('data/reponse' + lat + '_' + lon + 'z.json')){
                    fs.writeFileSync('data/reponse' + lat + '_' + lon + 'z.json',body,'utf-8');   
                }
            });
             request('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat1 + ',' + lon1 + '&key=AIzaSyAH7gbryCvy7UyxcJUFZ47rBfXQVc4O_Bk&result_type=locality', function (error, response, body, next) { 
                if (!fs.existsSync('data/reponse' + lat1 + '_' + lon1 + 'z.json')){
                    fs.writeFileSync('data/reponse' + lat1 + '_' + lon1 + 'z.json',body,'utf-8');   
                }
            }); 
      } 
      
    /**
     * Récupère le code position de google map et l'adresse formatée
     * @param {Number } lat
     * @param {Number } lon
     * @returns place_id, formatted_address
     */
    static position(lat,lon){
         var lieu = require('../data/reponse' + lat + '_' + lon + 'z.json');
         var result = [];
            for (let i of lieu.results){
                result.place_id = i.place_id;
                result.formatted_address = i.formatted_address;
                }
             return result;
    }
        
    /**
     * Crée la liste des transports complétée
     * @param {Array} newliste
     * @returns {Array Transport.listeTransports.liste}
     */   
    static listeTransports(newliste) {
            var liste = [];
            var id = -1;
            for (var t of newliste){                   
                Transport.findAddresses(t.coordinates_from.lat,t.coordinates_from.lon,t.coordinates_to.lat,t.coordinates_to.lon);
                id++;
                var el = new Transport(id,t.title,t.coordinates_from.lat,t.coordinates_from.lon,t.coordinates_to.lat,t.coordinates_to.lon, t.vehicule, t.comment);
                liste.push(el);           
        }  
            return liste; 
    };
}

module.exports = Transport;