Soal‌
1. Buatlah algoritma menggunakan pseudocode
untuk menghitung luas persegi panjang
2. Buatlah algoritma menggunakan pseudocode
untuk mengubah jam dan menit yang diinput ke
dalam satuan detik.
3. Buatlah algoritma menggunakan pseudocode
untuk menentukan apakah bilangan yang diinput
adalah bilangan ganjil atau bilangan genap.
4. Buatlah algoritma menggunakan pseudocode
untuk menghitung luas lingkaran.
5. Buatlah algoritma menggunakan pseudocode
untuk menginput 3 buah bilangan, kemudian
tentukan bilangan terbesar, terkecil dan rataratanya

Jawaban
1. Program hitung_luas_persegi_panjang

deklarasi

var panjang,lebar,luas:angka;

algoritma:

baca (panjang);

baca (lebar);

luas = panjang * lebar;

tulis(luas);

2. program_mengubah_jam_dan_menit_yang_di_input_menjadi_satuan_detik.

deklarasi

var jam, menit, hasil : angka;

algoritma :

baca (jam)

baca (menit)

jam = jam * 3600

menit = menit * 60

hasil = jam * menit

cetak (hasil)

3. program menentukan_bilangan_ganjil_genap

Deklarasi:

var bilangan,hasil:angka

deskripsi:

baca (bilangan)

hasil = bilangan % 2

jika(hasil tidak = 0) maka

cetak "bilangan ganjil"

lainnya

cetak "bilangan genap"

4. program hitung_luas_lingkaran

deklarasi :

var r,hasil ,angka

algoritma:

baca (r)

luas = (3,14 * jari * jari)

tulis (luas)

5. program_menginput_tiga_buah_bilangan_terbesar_terkecil_dan_rata_rata
deklarasi:

var x, y, z

algoritma:

baca (x)

baca (y)

baca (z)

bilangan terbesar:

jika ( x > y dan x> z ) maka

cetak(terbesar x)

jika(y > x dan y > z) maka

cetak(terbesar y)

lainnya

cetak(terbesar z)

jika (x < y dan x < z) maka

cetak(terkecil x)

jika(y < x dan y < z) maka

cetak(terkecil y)

lainnya

cetak (terkecil z)

rata_rata = (x+y+z)/3

cetak(rata_rata)