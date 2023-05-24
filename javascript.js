const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
  let maxHitungKalimat = 0;
  for (let i = 0; i < sentences.length; i++) {
    const kata_kata = sentences[i].split(' ');
    const hitungkata_kata = kata_kata.length;
    if (hitungkata_kata > maxHitungKalimat) {
      maxHitungKalimat = hitungkata_kata;
    }
  }
  return maxHitungKalimat;
}

console.log(result(sentences));
