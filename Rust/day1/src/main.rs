use std::{
    fs::File,
    io::{prelude::*, BufReader},
    path::Path,
    time::Instant,
};

fn lines_from_file(filename: impl AsRef<Path>) -> Vec<String> {
    let file = File::open(filename).expect("no such file");
    let buf = BufReader::new(file);
    buf.lines()
        .map(|l| l.expect("Could not parse line"))
        .collect()
}

fn main() {
    let now = Instant::now();
    let lines: Vec<String>= lines_from_file("inputs.txt");
    let mut calories: i32 = 0;
    let mut all_calories: Vec<i32> = Vec::new();

    for line in lines {
        if line == "" {
            all_calories.push(calories);
            calories = 0;
        } else {
            calories += line.parse::<i32>().unwrap();
        }
    }
    all_calories.sort();
    all_calories.reverse();

    let top_calories: i32 = all_calories[0] + all_calories[1] + all_calories[2];
    println!("Best elf calories: {:?}", all_calories[0]);
    println!("Top 3 elves combined calories: {:?}", top_calories);
    let elapsed = now.elapsed();
    println!("Execution time: {:.2?}", elapsed);
}