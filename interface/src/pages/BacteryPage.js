import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import data from '../data/bakteri.json'
// import categories from '../../data/ontologi_konsep.json';
// import tes2 from '../../data/images/ontologi/masjid.png';
// import CategoryList2 from './CategoryList2';
// import HierarchyNavigation from './HierarcyNavigation';

const BacteryPage = () => {
  const { bacteryName } = useParams();

  // Fungsi rekursif untuk mencari kategori dalam struktur hierarki
  const findCategory = (categories, name) => {
    for (let category of categories) {
      if (category.nama === name) {
        return category;
      }
      //   if (category.subkategori.length > 0) {
      //     const found = findCategory(category.subkategori, name);
      //     if (found) {
      //       return found;
      //     }
      //   }
      //   if (category.related_konsep.length > 0) {
      //     const found = findCategory(category.related_konsep, name);
      //     if (found) {
      //       return found;
      //     }
      //   }
    }
    return null;
  };

  //   function findCategoryPath(data, targetCategory) {
  //     for (let item of data) {
  //       if (item.nama === targetCategory) {
  //         return [item];
  //       }
  //       if (item.subkategori.length > 0) {
  //         const path = findCategoryPath(item.subkategori, targetCategory);
  //         if (path.length) {
  //           return [item, ...path];
  //         }
  //       }
  //     }
  //     return [];
  //   }

  // Cari kategori berdasarkan nama
  const bactery = findCategory(data, bacteryName);

  //   if (!category) {
  //     return <h1>Category not found</h1>;
  //   }

  //   const TranslationText = ({ translation }) => {
  //     return (
  //       <p dangerouslySetInnerHTML={{ __html: translation }} />
  //     );
  //   };

  //   const translation = "Allah telah menjadikan <strong>Ka‘bah</strong>, rumah suci itu sebagai pusat kegiatan (peribadatan dan urusan dunia) bagi manusia, dan (demikian pula) bulan haram, hadyu (hewan kurban) dan qalā’id (hewan kurban yang diberi kalung). Yang demikian itu agar kamu mengetahui bahwa sesungguhnya Allah mengetahui apa pun yang ada di langit dan apa pun yang ada di bumi dan bahwa Allah Maha Mengetahui segala sesuatu.";


  return (
    <div className='p-3'>
      <h1>{bactery.nama}</h1>
      <br></br>
      <h4>Name and taxonomic classification</h4>
      <pre>
        <strong>Last LPSN update</strong>              {bactery.last_update} (DD-MM-YYYY)
      </pre>
      <pre>
      <strong>Domain</strong>                        {bactery.domain}
      </pre>
      <div className='penamaan2'>
        <pre style={{ "margin-top": "-10px !important" }}>
        <strong>Phylum</strong>                        {bactery.phylum}
        </pre>
      </div>
      <pre>
      <strong>Class</strong>                         {bactery.class}
      </pre>
      <pre>
      <strong>Order</strong>                         {bactery.order}
      </pre>
      <pre>
      <strong>Family</strong>                        {bactery.family}
      </pre>
      <pre>
      <strong>Genus</strong>                         {bactery.genus}
      </pre>
      <pre>
      <strong>Species</strong>                       {bactery.species}
      </pre>
      <pre>
      <strong>Full Scientific Name (LPSN)</strong>   {bactery.lpsn}
      </pre>
      {bactery.synonym && (
        <pre>
          <strong>Synonym</strong>                       {bactery.synonym}
        </pre>
      )}

      <br></br>
      {bactery.morphology && (
        <div>
          <h4>Morphology</h4>
          <pre>
          <strong>Gram stain</strong>                    {bactery.morphology.gram_stain1}
          </pre>
          <pre>
          <strong>Gram stain</strong>                    {bactery.morphology.gram_stain2} <strong>Confidence in %</strong> {bactery.morphology.confidence}
          </pre>
          <pre>
          <strong>Cell shape</strong>                    {bactery.morphology.cell_shape}
          </pre>
          <pre>
          <strong>Motility</strong>                      {bactery.morphology.motility}
          </pre>
          <pre>
          <strong>Incubation period</strong>             {bactery.morphology.incubation_period1}
          </pre>
          <pre>
          <strong>Incubation period</strong>             {bactery.morphology.incubation_period2}
          </pre>
        </div>
      )}


    </div>
  );
};

export default BacteryPage;
