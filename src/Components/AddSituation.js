import axios from "axios"

function AddSituation(){

    const handleAddSituation = (e) =>{
        e.preventDefault()
        console.log(e.target.img.files)
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/situation/addSituation',
            data: {
                name: e.target.name.value,
                img: e.target.img.files,
                description: e.target.description.value,
                langages: e.target.langages.value,
                date: e.target.date.value,
                documents: e.target.documents.files,
                productions: e.target.productions.files,
                type: e.target.type.value
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((data) => {
            console.log(data.data)
        })
    } 

    return(
        <>
            <div className="add-situation-title">Ajouter une situation :</div>
            <form action="" onSubmit={(e) => handleAddSituation(e)}>
                <input type="text" name="name" placeholder="nom" />
                <label>Images</label>
                <input type="file" multiple name="img" />
                <textarea name="description" cols="30" rows="10" placeholder="description"></textarea>
                <input type="text" name="langages" placeholder="langages" />
                <input type="date" name="date" />
                <label>Documents</label>
                <input type="file" multiple name="documents"  />
                <label>Productions</label>
                <input type="file" multiple name="productions" />
                <input type="text" name="type" placeholder="type" />
                <input type="submit" value="Enregistrer" />
            </form>
        
        </>
    )
}

export default AddSituation