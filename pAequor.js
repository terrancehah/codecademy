// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  const pAequorFactory = (num, array) => {
    let pAequor = {
        specimenNum: num,
        dna: array,

        mutate() {
            let randomBaseIndex = [Math.floor(Math.random() * (array.length - 1))];
            switch (this.dna[randomBaseIndex]) {
                case 'C': 
                (this.dna[randomBaseIndex]) = ['A', 'T', 'G'][Math.floor(Math.random() * 2)];
                break;

                case 'A':
                (this.dna[randomBaseIndex]) = ['C', 'T', 'G'][Math.floor(Math.random() * 2)];
                break;

                case 'T':
                (this.dna[randomBaseIndex]) = ['C', 'A', 'G'][Math.floor(Math.random() * 2)];
                break;

                case 'G':
                (this.dna[randomBaseIndex]) = ['C', 'T', 'A'][Math.floor(Math.random() * 2)];
                break;
            }
            return this.dna;
        },

        compareDNA(object) {
            let similar = [];
            for (i = 0; i < object.dna.length; i++) {
                if (this.dna[i] == object.dna[i]) {
                    similar.unshift(this.dna[i]);
                };
            };
            return `specimen #${this.specimenNum} and specimen #${object.specimenNum} have ${(similar.length / array.length * 100).toFixed(2)}% DNA in common`;
        },

        willLikelySurvive() {
            const cng = this.dna.filter(dna => dna === 'C' || dna === 'G');
            if ((cng.length / this.dna.length) > 0.6) {
                return true;
            } else {
                return false;
            };
        },

        complementStrand() {
            let complementaryStrand =[];
            for (i = 0; i < this.dna.length; i++) {
                switch (this.dna[i]) {
                    case 'C':
                        complementaryStrand.push('G');
                        break;
                    
                    case 'G':
                        complementaryStrand.push('C');
                        break;

                    case 'A':
                        complementaryStrand.push('T');
                        break;

                    case 'T':
                        complementaryStrand.push('A');
                        break;
                };
            };
            return complementaryStrand;
        },

    };
    return pAequor;
  }

const thirty = [];
  
function makeThirty(array) {
    for (i = 0; i < 30; i++) {
        array.unshift(mockUpStrand());
    };
    return array;
};
    


const testArray = pAequorFactory(4, [
    'G', 'C', 'C', 'T',
    'C', 'C', 'A', 'G',
    'T', 'G', 'C', 'G',
    'T', 'A', 'A', 'C'
  ]
  );

const testArray2 = pAequorFactory(3, [
    'A', 'T', 'A', 'T',
    'C', 'G', 'C', 'T',
    'A', 'G', 'C', 'G',
    'T', 'C', 'G', 'A'
  ]
  );

console.log(testArray.compareDNA(testArray2));
console.log(testArray2.willLikelySurvive());
console.log(testArray2.complementStrand());
