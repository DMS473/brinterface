import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import data from '../data/bakteri.json'
import { Button, Collapse } from 'react-bootstrap';
// import categories from '../../data/ontologi_konsep.json';
// import tes2 from '../../data/images/ontologi/masjid.png';
// import CategoryList2 from './CategoryList2';
// import HierarchyNavigation from './HierarcyNavigation';

const BacteryPage = () => {
  const { bacteryName } = useParams();
  const [open, setOpen] = useState(true);
  const [taxonomyOpen, setTaxonomyOpen] = useState(true);
  const [cultureOpen, setCultureOpen] = useState(true);
  const [physioOpen, setPhysioOpen] = useState(true);
  const [isolationOpen, setIsolationOpen] = useState(true);
  const [safetyOpen, setSafetyOpen] = useState(true);
  const [sequenceOpen, setSequenceOpen] = useState(true);
  const [genomeOpen, setGenomeOpen] = useState(true);
  const [externalOpen, setExternalOpen] = useState(true);
  const [referenceOpen, setReferenceOpen] = useState(true);

  
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

      {/* <h4>Name and taxonomic classification</h4> */}
      <Button
        onClick={() => setTaxonomyOpen(!taxonomyOpen)}
        aria-controls="taxonomy-content"
        aria-expanded={setTaxonomyOpen}
        variant="link"
      >
        <h4>Name and taxonomic classification</h4>
      </Button>
      <Collapse in={taxonomyOpen}>
        <div id="taxonomy-content">
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
        </div>
      </Collapse>



      <br></br>
      {/* bagian morphology */}
      {bactery.morphology && (
        <div>
          {/* <h4>Morphology</h4>
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
          </pre> */}

          <Button
            onClick={() => setOpen(!open)}
            aria-controls="morphology-content"
            aria-expanded={open}
            variant="link"
          >
            <h4>Morphology</h4>
          </Button>
          <Collapse in={open}>
            <div id="morphology-content">
              <pre>
                <strong>Gram stain</strong> {bactery.morphology.gram_stain1}
              </pre>
              <pre>
                <strong>Gram stain</strong> {bactery.morphology.gram_stain2}{' '}
                <strong>Confidence in %</strong> {bactery.morphology.confidence}
              </pre>
              <pre>
                <strong>Cell shape</strong> {bactery.morphology.cell_shape}
              </pre>
              <pre>
                <strong>Motility</strong> {bactery.morphology.motility}
              </pre>
              <pre>
                <strong>Incubation period</strong> {bactery.morphology.incubation_period1}
              </pre>
              <pre>
                <strong>Incubation period</strong> {bactery.morphology.incubation_period2}
              </pre>
            </div>
          </Collapse>
        </div>
      )}


      {/* part3 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      {/* <br></br> */}
      <Button
        onClick={() => setCultureOpen(!cultureOpen)}
        aria-controls="culture-content"
        aria-expanded={setCultureOpen}
        variant="link"
      >
        <h4>Culture and Growth Conditions</h4>
      </Button>
      <Collapse in={cultureOpen}>
        <div id="culture-content">
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
        </div>
      </Collapse>


      {/* part4 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      <br></br>
      <Button
        onClick={() => setPhysioOpen(!physioOpen)}
        aria-controls="physio-content"
        aria-expanded={setPhysioOpen}
        variant="link"
      >
        <h4>Physiology and Metabolism</h4>
      </Button>
      <Collapse in={physioOpen}>
        <div id="physio-content">
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
        </div>
      </Collapse>

      {/* part5 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      <br></br>
      <Button
        onClick={() => setIsolationOpen(!isolationOpen)}
        aria-controls="isolation-content"
        aria-expanded={setIsolationOpen}
        variant="link"
      >
        <h4>Isolation, sampling and environmental information</h4>
      </Button>
      <Collapse in={isolationOpen}>
        <div id="isolation-content">
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
        </div>
      </Collapse>


      {/* part6 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      <br></br>
      <Button
        onClick={() => setSafetyOpen(!safetyOpen)}
        aria-controls="safety-content"
        aria-expanded={setSafetyOpen}
        variant="link"
      >
        <h4>Safety information</h4>
      </Button>
      <Collapse in={safetyOpen}>
        <div id="safety-content">
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
        </div>
      </Collapse>


      {/* part7 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      <br></br>
      <Button
        onClick={() => setSequenceOpen(!sequenceOpen)}
        aria-controls="sequence-content"
        aria-expanded={setSequenceOpen}
        variant="link"
      >
        <h4>Sequence information</h4>
      </Button>
      <Collapse in={sequenceOpen}>
        <div id="sequence-content">
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
        </div>
      </Collapse>


      {/* part8 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      <br></br>
      <Button
        onClick={() => setGenomeOpen(!genomeOpen)}
        aria-controls="genome-content"
        aria-expanded={setGenomeOpen}
        variant="link"
      >
        <h4>Genome-based preditions</h4>
      </Button>
      <Collapse in={genomeOpen}>
        <div id="genome-content">
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
        </div>
      </Collapse>


      {/* part9 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      <br></br>
      <Button
        onClick={() => setExternalOpen(!externalOpen)}
        aria-controls="external-content"
        aria-expanded={setExternalOpen}
        variant="link"
      >
        <h4>External links</h4>
      </Button>
      <Collapse in={externalOpen}>
        <div id="external-content">
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
        </div>
      </Collapse>


      {/* part10 */}
      {/* <h4>Name and taxonomic classification</h4> */}
      <br></br>
      <Button
        onClick={() => setReferenceOpen(!referenceOpen)}
        aria-controls="reference-content"
        aria-expanded={setReferenceOpen}
        variant="link"
      >
        <h4>References</h4>
      </Button>
      <Collapse in={referenceOpen}>
        <div id="reference-content">
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
        </div>
      </Collapse>


    </div>
  );
};

export default BacteryPage;
