import { Component, OnInit } from '@angular/core';
import { Activity, activities } from './activity-timeline-data';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-activity-timeline',
  standalone: true,
  imports: [DemoMaterialModule, NgIf, NgFor],
  templateUrl: './activity-timeline.component.html'
})
export class ActivityTimelineComponent implements OnInit {

  activityData: Activity[];
  diseaseData = [
    {
        name: "Aortic Enlargement",
        infoDate: "2023-06-17",
        description: "Aortik büyüme, aortanın normalden daha genişlemiş olduğu bir durumdur ve genellikle hipertansiyon veya aort anevrizması ile ilişkilidir.",
        detailImage: "assets/images/Aortic.jpg",
        buttonColor: "primary",
        image: "assets/images/aortic-enlargement.jpg"
    },
    {
        name: "Atelectasis",
        infoDate: "2023-06-17",
        description: "Atelektazi, akciğerin bir bölümünün veya tamamının çökmesi durumudur ve nefes almayı zorlaştırabilir.",
        detailImage: "assets/images/atelectasis.jpg",
        buttonColor: "primary",
        image: "assets/images/Atelectasis.jpg"
    },
    {
        name: "Calcification",
        infoDate: "2023-06-17",
        description: "Kalsifikasyon, vücut dokularında kalsiyum tuzlarının birikmesi durumudur ve genellikle inflamasyon veya yaralanma sonrası görülür.",
        detailImage: "assets/images/Calcification.jpg",
        buttonColor: "primary",
        image: "assets/images/calcification.jpg"
    },
    {
        name: "Cardiomegaly",
        infoDate: "2023-06-17",
        description: "Kardiyomegali, kalbin normalden daha büyük olması durumudur ve genellikle kalp hastalıkları veya yüksek tansiyon nedeniyle oluşur.",
        detailImage: "assets/images/Cardiomegaly.jpg",
        buttonColor: "primary",
        image: "assets/images/cardiomegaly.jpg"
    },
    {
        name: "Consolidation",
        infoDate: "2023-06-17",
        description: "Konsolidasyon, akciğer dokusunun hava yerine sıvı, mukus veya kanla dolması durumudur ve genellikle enfeksiyonlar ile ilişkilidir.",
        detailImage: "assets/images/Consolidation.jpg",
        buttonColor: "primary",
        image: "assets/images/consolidation.jpg"
    },
    {
        name: "ILD",
        infoDate: "2023-06-17",
        description: "İnterstisyel akciğer hastalığı (ILD), akciğer dokusunun inflamasyonu ve skarlaşması ile karakterize edilen bir grup hastalıktır.",
        detailImage: "assets/images/ILD.jpg",
        buttonColor: "primary",
        image: "assets/images/ild.jpg"
    },
    {
        name: "Infiltration",
        infoDate: "2023-06-17",
        description: "İnfiltrasyon, akciğer dokusuna sıvı, hücreler veya diğer maddelerin birikmesi durumudur ve çeşitli hastalıklara işaret edebilir.",
        detailImage: "assets/images/Infiltration.jpg",
        buttonColor: "primary",
        image: "assets/images/infiltration.jpg"
    },
    {
        name: "Lung Opacity",
        infoDate: "2023-06-17",
        description: "Akciğer opasitesi, akciğerin bir bölgesinde yoğunluk artışı olup, genellikle enfeksiyon, inflamasyon veya diğer akciğer hastalıklarına bağlıdır.",
        detailImage: "assets/images/Lung_Opacity.jpg",
        buttonColor: "primary",
        image: "assets/images/lung-opacity.jpg"
    },
    {
        name: "Nodule/Mass",
        infoDate: "2023-06-17",
        description: "Nodül veya kitle, akciğer dokusunda anormal bir büyüme olup, iyi huylu veya kötü huylu olabilir.",
        detailImage: "assets/images/Nodule_Mass.jpg",
        buttonColor: "primary",
        image: "assets/images/nodule-mass.jpg"
    },
    {
        name: "Other Lesion",
        infoDate: "2023-06-17",
        description: "Diğer lezyonlar, akciğerde görülen ve spesifik olarak tanımlanamayan anormal yapıları ifade eder.",
        detailImage: "assets/images/Other_lesion.jpg",
        buttonColor: "primary",
        image: "assets/images/other-lesion.jpg"
    },
    {
        name: "Pleural Effusion",
        infoDate: "2023-06-17",
        description: "Plevral efüzyon, akciğer ve göğüs duvarı arasındaki plevra boşluğunda sıvı birikmesi durumudur ve nefes almayı zorlaştırabilir.",
        detailImage: "assets/images/Pleural_effusion.jpg",
        buttonColor: "primary",
        image: "assets/images/pleural-effusion.jpg"
    },
    {
        name: "Pleural Thickening",
        infoDate: "2023-06-17",
        description: "Plevral kalınlaşma, plevra dokusunun kalınlaşması olup genellikle inflamasyon veya enfeksiyon sonrası görülür.",
        detailImage: "assets/images/Pleural_thickening.jpg",
        buttonColor: "primary",
        image: "assets/images/pleural-thickening.jpg"
    },
    {
        name: "Pneumothorax",
        infoDate: "2023-06-17",
        description: "Pnömotoraks, akciğer ile göğüs duvarı arasındaki boşluğa hava girmesi sonucu akciğerin kısmen veya tamamen çökmesi durumudur.",
        detailImage: "assets/images/Pneumothorax.png",
        buttonColor: "primary",
        image: "assets/images/pneumothorax.jpg"
    },
    {
        name: "Pulmonary Fibrosis",
        infoDate: "2023-06-17",
        description: "Pulmoner fibrozis, akciğer dokusunun skarlaşması ve sertleşmesi ile karakterize edilen kronik bir hastalıktır.",
        detailImage: "assets/images/Pulmonary_fibrosis.jpg",
        buttonColor: "primary",
        image: "assets/images/pulmonary-fibrosis.jpg"
    }
];

  constructor() {

    this.activityData = activities;
  }


  ngOnInit(): void {
  }

}
