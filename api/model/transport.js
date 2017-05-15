/** Class representant un transportt. */
class Transport {
    /**
    * Constructeur de Transport
    * @contructor
    * @param {Number} id
    * @param {String} title
    * @param {Number} coordinates_from_lat
    * @param {Number} coordinates_from_lon
    * @param {Number} coordinates_to_lat
    * @param {Number} coordinates_to_lon
    * @param {String} vehicule
    * @param {String} comment
    * @returns {nm$_transport.Transport}
    */
    constructor(id,title,coordinates_from_lat,coordinates_from_lon,coordinates_to_lat,coordinates_to_lon,vehicule,comment){
    const dep = Transport.position(coordinates_from_lat,coordinates_from_lon);
    const arr = Transport.position(coordinates_to_lat,coordinates_to_lon);           
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
     * retourne id identifiant
     * @returns {nm$_transport.Transport.id}
     */
    get id(){
        return this._id;
    }
    /**
     * attribue id
     * @param {Number} i
     */
    set id(i){
        this._id = i;
    }
    /**
     * retourne title titre
     * @returns {nm$_transport.Transport.title}
     */
    get title(){
            return this.title;
    }
    /**
     * attribue title
     * @param {String} t
     */
    set title(t){
            this._title = t;
    }
    /**
     * retourne coordinates_from_lat latitude coordonnees de depart
     * @returns {nm$_transport.Transport.coordinates_from_lat}
     */
    get coordinatesFromLat(){
            return this._coordinates_from_lat;
    }
    /**
     * attribue coordinates_from_lat
     * @param {Number} cfla
     */
    set coordinatesFromLat(cfla){
            this._coordinates_from_lat = cfla;
    }
    /**
     * retourne coordinates_from_lon longitude coordonnees de depart
     * @returns {nm$_transport.Transport._coordinates_from_lon}
     */
    get coordinatesFromLon(){
            return this._coordinates_from_lon;
    }
    /**
     * attribue coordinates_from_lon
     * @param {Number} cflo
     */
    set coordinatesFromLon(cflo){
            this._coordinates_from_lon = cflo;
    }
    /**
     * retourne coordinates_to_lat latitude coordonnees d'arrivee
     * @returns {nm$_transport.Transport._coordinates_to_lat}
     */
    get coordinatesToLat(){
            return this._coordinates_to_lat;
    }
    /**
     * attribue coordinates_to_lat
     * @param {Number} ctla
     */
    set coordinatesToLat(ctla){
            this._coordinates_to_lat = ctla;
    }
    /**
     * retourne coordinates_to_lon longitude coordonnees d'arrivee
     * @returns {nm$_transport.Transport._coordinates_to_lon}
     */
    get coordinatesToLon(){
            return this._coordinates_to_lon;
    }
    /**
     * attribue coordinates_to_lon
     * @param {Number} ctlo
     */
    set coordToLon(ctlo){
            this._coordinates_to_lon = ctlo;
    }
    /**
     * retourne vehicule vehicule
     * @returns {nm$_transport.Transport._vehicle}
     */
    get vehicule(){
            return this._vehicule;
    }
    /**
     * attribue vehicle
     * @param {String} v
     */
    set vehicule(v){
            this._vehicule = v;
    }
    /**
     * retourne comment commentaire
     * @returns {nm$_transport.Transport._comment}
     */
    get comment(){
            return this._comment;
    }
    /**
     * attribue comment
     * @param {type} com
     */
    set comment(com){
            this._comment = com;
    }
    /**
     * retourne addressDepart code google point de départ
     * @returns {.Transport@call;position.place_id|dep.place_id}
     */
    get addressDepart(){
            return this._addressDepart;
    }
    /**
     * attribue addressDepart
     * @param {String} ad
     */
    set addressDepart(ad){
            this._addressDepart = ad;
    }
    /**
     * retourne departNom nom localite de depart
     * @returns {.Transport@call;position.formatted_address|dep.formatted_address}
     */
    get departNom(){
            return this._departNom;
    }
    /**
     * attribue deparNom
     * @param {String} dn
     */
    set departNom(dn){
            this._departNom = dn;
    }
    /**
     * retourne addressArrivee code google point d'arrivee
     * @returns {.Transport@call;position.place_id|arr.place_id}
     */
    get addressArrivee(){
            return this._addressArrivee;
    }
    /**
     * attribue addressArrivee
     * @param {String} aa
     */
    set addressArrivee(aa){
            this._addressArrivee = aa;
    }
    /**
     * retourne arrNom nom localite d'arrivee
     * @returns {nm$_transport.Transport._arrNom}
     */
    get arrNom(){
            return this._arrNom;
    }
    /**
     * attribue arrNom
     * @param {String} an
     * @returns {undefined}
     */
    set arrNom(an){
            this._arrNom = an;
    }
    /**
     * retourne map url source iframe google map
     * @returns {String}
     */
    get map(){
        return this._map;
    }
    /**
     * attribue map
     * @param {String} m
     */
    set map(m){
        this._map = m;
    }
    /**
     * supprime le transport de la base de donnees
     * * @todo Implement this function.
     */
    remove(){
        //
    }
    /**
     * enregistre le transport dans la base de donnees
     * * @todo Implement this function.
     */
    save(){
        //
    } 
    /**
     * retourne un transport a partir de son id
     * @param {Number} id
     * * @todo Implement this function.
     */
    findById(id){
        //
    }
    /**
     * retourne un transport mis à jour
     * @param {Number} id
     * @param {Object} body
     * @param {Boolean} ok (new)
     * * @todo Implement this function.
     */
    findOneAndUpdate(id,body,ok){
        //
    }
    
    /**
     * retourne mode transport pour requête google maps
     * @param {type} vehicule
     * @returns {String}
     */
    static vehicle(vehicule){
         let res = '';
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
     * @returns  json 
     */
    static findAddresses(lat,lon,lat1,lon1){
            let request = require('request');
            const fs = require('fs');

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
     * @returns {Object}
     */
    static position(lat,lon){
         const lieu = require('../../data/reponse' + lat + '_' + lon + 'z.json');
         let result = [];
            for (let i of lieu.results){
                result.place_id = i.place_id;
                result.formatted_address = i.formatted_address;
                }
             return result;
    }
        
    /**
     * Crée la liste des transports 
     * @param {json} newliste
     * @returns {Transport.listeTransports.liste}
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