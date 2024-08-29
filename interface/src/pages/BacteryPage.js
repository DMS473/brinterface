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

      <h3>Name and taxonomic classification</h3>
      <pre>
        Domain:    {bactery.domain}
      </pre>
      <div className='penamaan2'>
        <pre style={{ "margin-top": "-10px !important"}}>
          Phylum     {bactery.phylum}
        </pre>
      </div>
      <pre>
        Class      {bactery.class}
      </pre>
      <pre>
        Order      {bactery.order}
      </pre>
      <pre>
        Genus      {bactery.genus}
      </pre>
      <pre>
        Species    {bactery.species}
      </pre>

    </div>
  );
};

export default BacteryPage;
